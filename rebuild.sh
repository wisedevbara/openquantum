#!/bin/bash
rm -rf /root/openquantum/.next
cd /root/openquantum && npm run build 2>&1
