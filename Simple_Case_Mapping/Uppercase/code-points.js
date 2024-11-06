module.exports=new Map(JSON.parse(require('zlib').gunzipSync(Buffer.from('H4sIAAAAAAAAEz2ZS3IkMQhEL8RC/OEsjrn/NSaSLHs1VE2noMUTDfLPz7ZU/pOfHanCvyvV/+RH35OaM1RqzzDpd4ZL6xkhbWektJ9R0nFGS+cZI11nrPStrE/6VlaVvpXVZG5ldZlbWUPmVtaUuZW1ZG5lbZlbWUfmVtaVuZXtydzKpjK3spksVjYL0bWzUnT9rBLdOKtFN88a0a2zVnSxrPkT3TlLRXfPMrF3K7uLPT0rxN758BR758NL7J0Pb7F3PnzE3vnwFXvnI57YOx+hYu98hInp+QgX0/MRIabnI1JMz0eUmJ6PGDG9lWPF9FbOJ6a3cqqY3sppYnYrp4vZrZwhZrdypvjlzLLFktaK5a1SKlanLRerU1SK1UVQLXYgWa3YEWStYkeOtYsdMdYpdqRYtxi99YodGTYqdkTYuNiRYJNiR4BNi13mbVbsMm6rYsz0uhgzvSnG/G6LMau7YpdLfyp+GfTn4pc3fy1+mfG34pcPVxW/LLiG+O24a4lrnjXit89uT/x2183Eb0/dQtxOYSVup7ARt1O4ivut7C7uF4GnuMdZLe4Xi6+4Xyyh4nGKcPE4RaR4nCJaPE4RKx6nSBXPU6SL5ymQ3zxFtvjl13PFL79eKn759XLxy69Xil9+vVr88uu14pdfbxW//Hq7+OXXGwydokf8Dr7PE78D72Pid9B9nOfbp8UvqT4rfkn1NfG9j22J3wGNZxJ33OKtxKUotCUO+9CVONjDVOIQDwuJS0LYStj9r5uE3ypeEn4r+0g4Ao1QidvmiJS4zY10idu+yPizSiJPm/1nrcRtZNT7s0yizluFRF0sVRJXeaNG4mpu9JO4WhttEldjo0Piamt0SVxNjV6JOygxKnEHJcYl7qDEpMQdlJiWuD2NWYnb01iVuIMS6xJ3UGJT4g5K7Ehc0Yvdz8qnkndQ8rXkHY98K3l7n6qSdzxSXfJKU2pKXkFKbcnLTOpKXmbSVPIyk+aSV3LSUtJOYS1pp7CVvGylq+QdlHSXvIOSnpJ3UHJT/H4R8ii5z+2K3zeq98TvwBcO/BXvei5x36jeSFyhLlWJK9SlJXFFucDVfd8yl7jvVlYSVwQqXOKOdAXIufXySfj9b6rExVeJ/4XfjSd7hWZDZc/bBn6h7hc4XPa8baTs+dgoWeXnWlb5uZFVfm5lr/hsPtnb3U2VvTK0abK3z5suewVpM2RvxzdT9k7FZsne3m+27H2jzZG9LGyu7JWrrSd7+dhSWTsf5bJ3jrZC9jKzlbK3B1sle3uw1bJ3yrZG9sra1sreedt+slfgtlWWe9XYF75z2SNsO2TvZ3D7b1+6f7/l6K+3sd9IN2WPg92WXXY4K7tsbZ6Kvsem5jlstjMvYbOReQ2bLcybb/v0vf32QF+b6Auu0lgl2B11wObHGysGe6Qu2F+bhNWDnVIPbHrqhc1ObB5sRjyIOOh34Dfpd+A36XfgN+l34Dfpd+A36XfgN78ODX6Tfgd+k34XfpN+F36Tfhd+i34Xfot+F36Lfhd+i34Xfot+F36Lfhd+62sO4be+/hB+2XzqZYj9JxpQfWxB9bLFLlQvW8ae8MGXsS28zNm3JnzZtyZ8MXdoRvU511T4cq6p8OVsQRW+nF2o4js6G1GFX6dfhV+nX4Uv/1pc+PKvy1VRNfoyh8310ZGqcU10ovrFjw5Uv5jReeoXp0P7xebQfvE4tF8MDu0XQ0BLPjWgJZMa0JJDDWjJnga05E0TWjKmCS250sJnvhw1PvPlBfwrhwIF89pf0471OQgo2NZvBADP+jX/YFi/th/c6tfwg1X9Wn3wqWzyFUzqUgsO2eCrgj029qrgjQ29KhhjI68GrtjAq4ElNu5qYIkNuxr4YaOuBmbYoKuBEzbmamCDDbkaeGAjrgYG2ICr2YP9zSMhald39WYNI5+YItSYU0wPaswppgY15hTTghpziilBjTnFdKDGnGIqUGNODTk15hTzgBpzijlAjTlF/6/GnKLvV2N9QOevbP0Vvb+y+Vf0/MqmX9H1K9t+Rd+vbPwVnb+y9Vd0/MqWXx0MOM8dukJl86sOHpznDj2ishVWBxvOc4eOUdkYK3pGdZ47R61jm6wOZvx+UdRR69g0K1pLdZ5BR61jC61oNNVZqx21jg21Orhy1mq0oMr2Wh2MOWu1o9ax2VYHb85ajUZV2Xqrgz1nrXbUOjbi6uDQWasDtY5tuQaYdNZqtLnKJl0DfDprdTz4ZV4CrDprdaDusYHXALfOWh2oe2znFQ2zOmt1oO6xudcAz85aHah7bPU1wLazVgfqHhv/rlHpujPbNQ7baCfsoN2wv88v7Dl7oV1qF9qldqFdahfapXahvTPb/VS678x24w6i78x24/ah78x2496h78x2343DoxZ3Da3UKrRKrUKr1Cq0Sq1Cq9QatEatQWvUGrRGrUFr1Bq0Rq1D69Q6tE6tQ+vUOrROrUPr1Aa0QW1AG9QGtEFtQBvUBrRBbUKb1Ca0SW1Cm9QmtEltQpvUFrRFbUFb1Ba0RW1BSx66oC1qG9qmtqFtahvaprahbWob2qYWXDW5anDV5KrBVZOrBldNrhpcNblqcNXkqsFVk6sGV02uGlw1uWpw1eRqwNWQqwFXQ64GXA25GnA15GrA1ZCrAVdDrgZcDbkacDXkasDVkKsBV0OuBlwNuRpwNeRqwNWQqwFXQ64GXA25GrAxZGPAxpCNARtDNgZsDNkYsDFkY8DGkI0BG0M2BmwM2RiwMWRjwMaQjQEbQzYGbAzZGLAxZGPAxpCNARtDNgZsDNkYsDFkY8DGkI0BG0M2BmwM2RiwMWRjwMaQjQEbQzYGbAzZGLAxZGPAxpCNARtDNgZsDNkYsDFkY8DGkI0FG0s2FmxwfusFG5zgesEGJ7desMG5pffuN8nGgo0lGws2OL30gg1Oc71gg1NcL9jgXNMLNjh29IINTmu9YINTWi/Y4MzT6yW9ZGBRW/Z+s3p9YPPzqDN7v1mNsbSXbGAw7b3frMZo2ktOMJz23m9WY7DsJQMYLXvrex+wGSdY2vtNaQyYvWQDI2ZvMZ5CPMw1hsHeZjyNeJh3DIS9zXgafskAhsLeod+GX/KwYGmHfgfvmesFJ7vfe8TDvC+Y2WU8g3jIwIKfXcaziOfjASzt3SLMe0/mXa4Hk+S8973HdfblfTBVzruZdd4L2EY7YfvZuNHm/DIPd9mcWebhFptzyjzDOs51HOsH13e8j+891g+u71g/uL4X7KANX0FfPrCLNvwG/cbIcDaZFwub6+ST4XwxLxU2P58Gm/uQuMF3xpwho0m/mbDpN0uGvf28bNjfe/htfq+E3+b3Kvgd+i34HfotfN9mnIXv24yz8H2b6xe+b3P9wvftbx183+Y6jTw242/seTP+wfvh+8H7+d5j/5dx4v7yLeMcxLOMZxDPMp5BPMt4BvEs41nsw+P7xT687z324THOxT7cbdRgLh4lb5iLR8kb5uJR8oa5eJS83Z9VOG8O/7Ji33vk4mrIYK4czoajcfky2pevi19v/4t+b/+LfrHnnPUGM91wLpvE55O8JT6f5C3LYBdth920A/anTdhLu2Ty6s8k8phXfyaRx2SciTwm40zkMclbIo9J3rLhN+m34Tfpt+E36bfhN3lLZ7jKuvO+YbjM2u99yfLecMMattIe2LzXs4XNuzt/sHl75wr7u+cz2LzBc4fdtAM2/XrCpl+HX96AhcMv78BwYb28ldxw+P3uDHHNGN+tIS4a47s3xFVjfDeHuGwM3h1GwC9vD3HhvcH7w8DlI+/QN3D9GLxDDFxABm8RA1eQvF2vxJ8iKvknEjzVPcX31PeU39PcU31Pe0/Np3z3NN+T3tN+T4Yne9+T35N+T3FP9j1dLL+R5cViXyx5sdgXS14s9sWSF4t9sdTFYl8sdbHYF0tdLN+9L/5YgqcvlrpY/IulLpbvXtjrYvnuhvEHFTx9sdTF4l8sdbH4F0tfLD7//v0HwUYhUrcdAAA=','base64'))))