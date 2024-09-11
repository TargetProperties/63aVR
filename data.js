var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.6010400966609328,
        "pitch": -0.08418133259556271,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -1.588513137763254,
          "pitch": -0.08417475735627633,
          "rotation": 0,
          "target": "1-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-lobby",
      "name": "Lobby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.34336717260729976,
        "pitch": 0.07069586825942054,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -1.1013210381401315,
          "pitch": 0.23934384014160592,
          "rotation": 0,
          "target": "2-bathroom-1"
        },
        {
          "yaw": 0.06110529282870125,
          "pitch": -0.22681777911279255,
          "rotation": 5.497787143782138,
          "target": "3-i-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bathroom-1",
      "name": "Bathroom 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.3955122251098313,
        "pitch": 1.039911777427296,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -0.668286627324532,
          "pitch": 0.4105125084879777,
          "rotation": 0,
          "target": "1-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-i-floor",
      "name": "I Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.7092823535679802,
        "pitch": 0.7320355757742547,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 1.3526598510234429,
          "pitch": 0.6493998145999633,
          "rotation": 5.497787143782138,
          "target": "6-i---ii-stairs"
        },
        {
          "yaw": -1.8898603746338942,
          "pitch": 0.6469401492146201,
          "rotation": 4.71238898038469,
          "target": "4-kitchen"
        },
        {
          "yaw": -0.15443448239075686,
          "pitch": 0.9362377119562915,
          "rotation": 0.7853981633974483,
          "target": "1-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.0706924114417014,
          "pitch": 0.4600519854840286,
          "rotation": 0.7853981633974483,
          "target": "3-i-floor"
        },
        {
          "yaw": -0.12354414488142851,
          "pitch": 0.5327975916613035,
          "rotation": 0,
          "target": "5-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-living",
      "name": "Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 2.655747156966788,
        "pitch": 0.4998209596099983,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -2.706551633915243,
          "pitch": 0.5972480104470321,
          "rotation": 0,
          "target": "4-kitchen"
        },
        {
          "yaw": -0.5913846486489334,
          "pitch": 0.6725213817827775,
          "rotation": 5.497787143782138,
          "target": "6-i---ii-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-i---ii-stairs",
      "name": "I - II Stairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 2.261504923432927,
        "pitch": 0.45313880721344546,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 1.3986961195491734,
          "pitch": 0.5477944247364324,
          "rotation": 0,
          "target": "3-i-floor"
        },
        {
          "yaw": 2.9905737720215937,
          "pitch": 0.484013821854381,
          "rotation": 0.7853981633974483,
          "target": "7-bathroom-2"
        },
        {
          "yaw": 1.8443074963050137,
          "pitch": 0.27973072150780176,
          "rotation": 5.497787143782138,
          "target": "8-ii-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bathroom-2",
      "name": "Bathroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.334189713377558,
        "pitch": 0.7357776774319476,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 2.2706140255294764,
          "pitch": 0.40056628223156565,
          "rotation": 0,
          "target": "6-i---ii-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-ii-floor",
      "name": "II Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.1827079254479518,
        "pitch": 0.653272351307459,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -2.0799396296808883,
          "pitch": 0.6857542890726762,
          "rotation": 4.71238898038469,
          "target": "9-bedroom-1"
        },
        {
          "yaw": 1.3401185402834699,
          "pitch": 0.5950819596378221,
          "rotation": 5.497787143782138,
          "target": "10-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-bedroom-1",
      "name": "Bedroom 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.5926608032849181,
        "pitch": 0.5852043394597803,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -2.073899765867015,
          "pitch": 0.7083438077039439,
          "rotation": 0,
          "target": "8-ii-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-bedroom-2",
      "name": "Bedroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.3057371716601356,
        "pitch": 0.8011144081522659,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 2.947973651997282,
          "pitch": 0.5268571983642616,
          "rotation": 0.7853981633974483,
          "target": "8-ii-floor"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "63A Queens Road",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
