import struct, zlib

# Create 16x16 RGBA PNG
width, height = 16, 16
pixels = []
for y in range(height):
    row = []
    for x in range(width):
        dx, dy = x - 7.5, y - 7.5
        dist = (dx*dx + dy*dy) ** 0.5
        if dist < 4:
            row.extend([251, 191, 36, 255])  # Gold
        elif dist < 5:
            row.extend([34, 211, 238, 200])  # Cyan
        else:
            row.extend([0, 0, 0, 0])  # Transparent
    pixels.append(bytes([0] + row))  # Filter byte + RGBA

raw_data = b''.join(pixels)

# PNG signature
sig = b'\x89PNG\r\n\x1a\n'

# IHDR chunk
ihdr_data = struct.pack('>IIBBBBB', width, height, 8, 6, 0, 0, 0)
ihdr_crc = zlib.crc32(b'IHDR' + ihdr_data)
ihdr = struct.pack('>I', 13) + b'IHDR' + ihdr_data + struct.pack('>I', ihdr_crc & 0xFFFFFFFF)

# IDAT chunk
compressed = zlib.compress(raw_data)
idat_crc = zlib.crc32(b'IDAT' + compressed)
idat = struct.pack('>I', len(compressed)) + b'IDAT' + compressed + struct.pack('>I', idat_crc & 0xFFFFFFFF)

# IEND chunk
iend_crc = zlib.crc32(b'IEND')
iend = struct.pack('>I', 0) + b'IEND' + struct.pack('>I', iend_crc & 0xFFFFFFFF)

png_data = sig + ihdr + idat + iend

# Write as favicon.ico (same format, different extension for browsers)
with open('/root/openquantum/public/favicon.ico', 'wb') as f:
    f.write(png_data)

print(f'favicon.ico created ({len(png_data)} bytes)')
