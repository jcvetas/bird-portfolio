const imgs = [
  {'url': 'https://imgur.com/p3kpCmm.jpg', title: 'Wild Turkey', date: '2024', location: 'Wisconsin', tags: ['gamebird']},
  {'url': 'https://imgur.com/YQB2nd2.jpg', title: 'Eastern Screech-Owl', date: '2024', location: 'Wisconsin', tags: ['owl']},
  {'url': 'https://imgur.com/mFIJKHo.jpg', title: 'Peregrine Falcon', date: '2023', location: 'Illinois', tags: ['raptor']},
  {'url': 'https://imgur.com/vKmmPti.jpg', title: 'Long-tailed Duck', date: '2023', location: 'Illinois', tags: ['waterfowl']},
  {'url': 'https://imgur.com/PBSGMW6.jpg', title: 'Gray-crowned Rosy-Finch', date: '2023', location: 'Wisconsin', tags: []},
  {'url': 'https://imgur.com/1UzI8Qt.jpg', title: 'Gray-crowned Rosy-Finch', date: '2023', location: 'Wisconsin', tags: []},
  {'url': 'https://imgur.com/RayX6No.jpg', title: 'Barred Owl', date: '2023', location: 'Wisconsin', tags: ['owl']},
  {'url': 'https://imgur.com/11IINL4.jpg', title: 'Ross&#x27;s Goose', date: '2023', location: 'Wisconsin', tags: ['waterfowl']},
  {'url': 'https://imgur.com/N6ZyDZZ.jpg', title: 'Clark&#x27;s Nutcracker', date: '2023', location: 'Wisconsin', tags: []},
  {'url': 'https://imgur.com/hUPIeLM.jpg', title: 'Limpkin', date: '2023', location: 'Wisconsin', tags: ['heron']},
  {'url': 'https://imgur.com/zjEC9iz.jpg', title: 'Sedge Wren', date: '2023', location: 'Wisconsin', tags: []},
  {'url': 'https://imgur.com/vrGE0SI.jpg', title: 'Marsh Wren', date: '2023', location: 'Wisconsin', tags: []},
  {'url': 'https://imgur.com/5vqeI9h.jpg', title: 'Lesser Black-backed Gull', date: '2023', location: 'Illinois', tags: ['gull']},
  {'url': 'https://imgur.com/laNj5R5.jpg', title: 'American White Pelican', date: '2023', location: 'Wisconsin', tags: []},
  {'url': 'https://imgur.com/LAxYHbF.jpg', title: 'American Robin', date: '2023', location: 'Wisconsin', tags: ['thrush']},
  {'url': 'https://imgur.com/H5xBHR4.jpg', title: 'House Wren', date: '2023', location: 'Wisconsin', tags: []},
  {'url': 'https://imgur.com/Cj9hgP9.jpg', title: 'Dickcissel', date: '2023', location: 'Wisconsin', tags: []},
  {'url': 'https://imgur.com/fBr2yT2.jpg', title: 'Limpkin', date: '2023', location: 'Wisconsin', tags: ['heron']},
  {'url': 'https://imgur.com/mTunuuy.jpg', title: 'Limpkin', date: '2023', location: 'Wisconsin', tags: ['heron']},
  {'url': 'https://imgur.com/uxDcNiF.jpg', title: 'Common Gallinule', date: '2023', location: 'Wisconsin', tags: []},
  {'url': 'https://imgur.com/mxcY737.jpg', title: 'Pileated Woodpecker', date: '2023', location: 'Wisconsin', tags: ['woodpecker']},
  {'url': 'https://imgur.com/sl1NJgN.jpg', title: 'Pileated Woodpecker', date: '2023', location: 'Wisconsin', tags: ['woodpecker']},
  {'url': 'https://imgur.com/JrQADZj.jpg', title: 'Blue-winged Warbler', date: '2023', location: 'Wisconsin', tags: ['warbler']},
  {'url': 'https://imgur.com/pA7K5SP.jpg', title: 'Prothonotary Warbler', date: '2023', location: 'Wisconsin', tags: ['warbler']},
  {'url': 'https://imgur.com/6bCHhXq.jpg', title: 'Hudsonian Godwit', date: '2023', location: 'Wisconsin', tags: ['shorebird']},
  {'url': 'https://imgur.com/GPfL83b.jpg', title: 'Pine Warbler', date: '2023', location: 'Wisconsin', tags: ['warbler']},
  {'url': 'https://imgur.com/3kS0Rdp.jpg', title: 'Hermit Thrush', date: '2023', location: 'Wisconsin', tags: ['thrush']},
  {'url': 'https://imgur.com/OYMp7Qu.jpg', title: 'Field Sparrow', date: '2023', location: 'Wisconsin', tags: ['sparrow']},
  {'url': 'https://imgur.com/BcihKwP.jpg', title: 'Red Squirrel', date: '2023', location: 'Minnesota', tags: ['non-bird']},
  {'url': 'https://imgur.com/MtuOkdG.jpg', title: 'Black-capped Chickadee', date: '2023', location: 'Minnesota', tags: []},
  {'url': 'https://i.imgur.com/JkYlxDx.jpg', title: 'Sanderling', date: '2022', location: 'Illinois', tags: ['shorebird']},
  {'url': 'https://i.imgur.com/Y0ESs2z.jpg', title: 'Common Yellowthroat', date: '2022', location: 'Wisconsin', tags: ['warbler']},
  {'url': 'https://i.imgur.com/69xxeVt.jpg', title: 'American Avocet', date: '2022', location: 'Wisconsin', tags: ['shorebird']},
  {'url': 'https://i.imgur.com/7ZymseX.jpg', title: 'Yellow-crowned Night-Heron', date: '2022', location: 'Wisconsin', tags: ['heron']},
  {'url': 'https://i.imgur.com/0keiPwe.jpg', title: 'Eastern Towhee', date: '2022', locaation: 'Illinois', tags: ['sparrow']},
  {'url': 'https://i.imgur.com/BNGlppu.jpg', title: 'Smith&#x27;s Longspur', date: '2022', location: 'Illinois', tags: ['sparrow']},
  {'url': 'https://i.imgur.com/Dunfbjb.jpg', title: 'Grasshopper Sprrow', date: '2022', location: 'Illinois', tags: ['sparrow']},
  {'url': 'https://i.imgur.com/0J4F7Aq.jpg', title: 'Cooper&#x27;s Hawk', date: '2022', location: 'Illinois', tags: ['raptor']},
  {'url': 'https://i.imgur.com/mDNIpm7.jpg', title: 'Black-and-white Warbler', date: '2022', location: 'Illinois', tags: ['warbler']},
  {'url': 'https://i.imgur.com/YPCB48w.jpg', title: 'Yellow-rumped Warbler', date: '2022', location: 'Illinois', tags: ['warbler']},
  {'url': 'https://i.imgur.com/DAYBYgW.jpg', 'title': 'Wild Turkey', 'date': '2022', 'location': 'Utah', tags: []},
  {'url': 'https://i.imgur.com/rcNVjHf.jpg', 'title': 'Common Raven', date: '2022', location: 'Utah', tags: []},
  {'url': 'https://i.imgur.com/1sRJSZC.jpg', 'title': 'Red-tailed Hawk', date: '2022', location: 'Illinois', tags: ['raptor']},
  {'url': 'https://i.imgur.com/TK430sL.jpg', 'title': 'Black-crowned Night-Heron', 'date': '2022', 'location': 'Illinois', 'tags': ['heron']},
  {'url': 'https://i.imgur.com/otyPxyM.jpg', 'title': 'Hooded Merganser', 'date': '2022', 'location': 'Illinois', 'tags': ['waterfowl']},
  {'url': 'https://i.imgur.com/CDeP3Zm.jpg', 'title': 'Great-tailed Grackle', 'date': '2022', 'location': 'Illinois', 'tags': ['']},
  {'url': 'https://i.imgur.com/3qZsYjh.jpg', 'title': 'Common Goldeney', 'date': '2022', 'location': 'Illinois', 'tags': ['waterfowl']},
  {'url': 'https://i.imgur.com/jaEkMmQ.jpg', 'title': 'Black Vulture', 'date': '2021', 'location': 'Illinois', 'tags': ['']},
  {'url': 'https://i.imgur.com/iIoIpbm.jpg', 'title': 'Least Bittern', 'date': '2021', 'location': 'Illinois', 'tags': ['heron']},
  {'url': 'https://i.imgur.com/2Ni1Auf.jpg', 'title': 'Black Tern', 'date': '2021', 'location': 'Illinois', 'tags': ['gull/tern']},
  {'url': 'https://i.imgur.com/RoIseHm.jpg', 'title': 'Green Heron' , 'date': '2021' , 'location': 'Illinois' , 'tags': ['heron']}, 
  {'url': 'https://i.imgur.com/4vmF3PG.jpg', 'title': 'White-crowned Sparrow', 'date': '2021' , 'location': 'Illinois' , 'tags': ['sparrow']},
  {'url': 'https://i.imgur.com/gqfbdiK.jpg' , 'title': 'American Robin' , 'date': '2021' , 'location': 'Illinois' , 'tags': ['thrush']},
  {'url': 'https://i.imgur.com/G08iXpe.jpg' , 'title': 'Palm Warbler' , 'date': '2021' , 'location': 'Illinois' , 'tags': ['warbler']},
  {'url': 'https://i.imgur.com/lovKLgJ.jpg' , 'title': 'Summer Tanager' , 'date': '2021' , 'location': 'Illinois' , 'tags': []},
  {'url': 'https://i.imgur.com/eCuXu6p.jpg' , 'title': 'Common Grackle' , 'date': '2021' , 'location': 'Illinois' , 'tags': []},
  {'url': 'https://i.imgur.com/Pg0IDsm.jpg' , 'title': 'Song Sparrow' , 'date': '2021' , 'location': 'Illinois' , 'tags': ['sparrow']},
  {'url': 'https://i.imgur.com/kpHwU2G.jpg' , 'title': 'Gyrfalcon' , 'date': '2021' , 'location': 'Illinois' , 'tags': ['raptor']},
  {'url': 'https://i.imgur.com/LR4OVuz.jpg' , 'title': 'Gyrfalcon' , 'date': '2021' , 'location': 'Illinois' , 'tags': ['raptor']},
  {'url': 'https://i.imgur.com/Bd7GIKT.jpg' , 'title': 'House Wren' , 'date': '2020' , 'location': 'Illinois' , 'tags': []},
  {'url': 'https://i.imgur.com/tZdzr74.jpg' , title: 'Long-billed Dowitcher' , date: '2020' , location: 'Illinois' , tags: ['shorebird']},
  {'url': 'https://i.imgur.com/H4WKEXw.jpg' , title: 'American Avocet' , date: '2020' , location: 'Illinois' , tags: ['shorebird']},
  {'url': 'https://i.imgur.com/BmqYJG2.jpg' , title: 'Cape May Warbler' ,  date: '2020' , location: 'Illinois' , tags: ['warbler']},
  {'url': 'https://i.imgur.com/1CpykaW.jpg' , title: 'Mississippi Kite' , date: '2020' , location: 'Illinois' , tags: ['raptor']},
  {'url': 'https://i.imgur.com/08FXSou.jpg' , title: 'Bald Eagle' , date: '2020' , location: 'Illinois' , tags: ['raptor']},
  {'url': 'https://i.imgur.com/Zysslz2.jpg' , title: 'Upland Sandpiper' , date: '2020' , location: 'Illinois' , tags: ['shorebird']},
  {'url': 'https://i.imgur.com/8FVfzzs.jpg' , title: 'Western Kingbird' , date: '2020' , location: 'Illinois' , tags: ['flycatcher']},
  {'url': 'https://i.imgur.com/EPnVJLM.jpg' , title: 'Vesper Sparrow' , date: '2020' , location: 'Illinois' , tags: ['sparrow']},
  {'url': 'https://i.imgur.com/HnrG5wA.jpg' , title: 'Dickcissel' , date: '2020' , location: 'Illinois' , tags: []},
  {'url': 'https://i.imgur.com/ms4WQ8T.jpg' , title: 'Black-throated Blue Warbler' , date: '2020' , location: 'Illinois' , tags: ['warbler']},
  {'url': 'https://i.imgur.com/Gd8x7wv.jpg' , title: 'Purple Martin' , date: '2020' , location: 'Illinois' , tags: ['swallow']},
  {'url': 'https://i.imgur.com/y0TVfJ2.jpg' , title: 'European Starling' , date: '2020' , location: 'Illinois' , tags: []},
  {'url': 'https://i.imgur.com/I76dOGL.jpg' , title: 'Townsend&#x27;s Warbler' , date: '2020' , location: 'Illinois' , tags: ['warbler']},
  {'url': 'https://i.imgur.com/UV5ualR.jpg' , title: 'Mourning Dove' , date: '2020' , location: 'Illinois' , tags: ['dove']},
  {'url': 'https://i.imgur.com/knJyqwr.jpg' , title: 'Kirtland&#x27;s Warbler' , date: '2019' , location: 'Illinois' , tags: ['warbler']},
  {'url': 'https://i.imgur.com/4AkglHJ.jpg' , title: 'Cliff Swallow' , date: '2019' , location: 'Illinois' , tags: ['swallow']},
  {'url': 'https://i.imgur.com/2LAq1Ku.jpg' , title: 'Grayish Saltador' , date: '2019' , location: 'Mexico' , tags: []},
  {'url': 'https://i.imgur.com/unOPLAC.jpg' , title: 'Squirrel Cuckoo', date: '2019' , location: 'Mexico' , tags: []},
  {'url': 'https://i.imgur.com/E8HPPcT.jpg' , title: 'Yellow-throated Warbler' , date: '2019' , location: 'Mexico' , tags: ['warbler']},
  {'url': 'https://i.imgur.com/FIy37CD.jpg' , title: 'Yellow-throated Warbler', date: '2019' , location: 'Mexico' , tags: ['warbler']},
  {'url': 'https://i.imgur.com/wXxMRmY.jpg' , title: 'Redhead', date: '2019' , location: 'Illinois' , tags: ['waterfowl']},
  {'url': 'https://i.imgur.com/RjRWwlz.jpg' , title: 'Cackling Goose' , date: '2018' , location: 'Illinois' , tags: ['waterfowl']},
  {'url': 'https://i.imgur.com/B5CjKa6.jpg' , title: 'Greater White-fronted Goose' , date: '2018' , location: 'Illinois' , tags: ['waterfowl']},
  {'url': 'https://i.imgur.com/kWDsyDw.jpg' , title: 'Piping Plover' , date: '2018' , location: 'Illinois' , tags: ['shorebird']},
  {'url': 'https://i.imgur.com/5mbWj35.jpg' , title: 'Harlequin Duck' , date: '2018' , location: 'Illinois' , tags: ['waterfowl']},
  {'url': 'https://i.imgur.com/rAxfWif.jpg' , title: 'Black-bellied Plover' , date: '2018' , location: 'Illinois' , tags: ['shorebird']},
  {'url': 'https://i.imgur.com/OctH5og.jpg' , title: 'Little Gull' , date: '2018' , location: 'Indiana' , tags: ['gull/tern']},
  {'url': 'https://i.imgur.com/eLTA7iM.jpg' , title: 'Forster&#x27;s Tern' , date: '2018' , location: 'Illinois' , tags: ['gull/tern']},
  {'url': 'https://i.imgur.com/YpROHgH.jpg' , title: 'Red Knot' , date: '2018' , location: 'Illinois' , tags: ['shorebird']},
  {'url': 'https://i.imgur.com/QEGpwiQ.jpg' , title: 'Black-crowned Night-Heron' , date: '2018' , location: 'Illinois' , tags: ['heron']},
  {'url': 'https://i.imgur.com/WOIiBSZ.jpg' , title: 'Red-winged Blackbird', date: '2018' , location: 'Illinois' , tags: []},
  {'url': 'https://i.imgur.com/uOhjPph.jpg' , title: 'Warbling Vireo', date: '2018' , location: 'Illinois' , tags: []},
  {'url': 'https://live.staticflickr.com/945/28370427928_c75496f202_k.jpg' , title: 'Chestnut-sided Warbler', date: '2018' , location: 'Illinois' , tags: ['warbler']},
  {'url': 'https://live.staticflickr.com/903/28370427718_b8d19fb097_k.jpg' , title: 'Marsh Wren' , date: '2018' , location: 'Illinois' , tags: []},
  {'url': 'https://live.staticflickr.com/952/27372823437_f43776fcca_k.jpg' , title: 'Red-winged Blackbird' , date: '2018' , location: 'Illinois' , tags: []},
  {'url': 'https://live.staticflickr.com/962/28370427288_3ca2205286_k.jpg' , title: 'Spotted Sandpiper' , date: '2018' , location: 'Illinois' , tags: ['shorebird']},
  {'url': 'https://live.staticflickr.com/956/28370427188_d604f7ccae_k.jpg' , title: 'Tree Swallow' , date: '2018' , location: 'Illinois' , tags: ['swallow']},
  {'url': 'https://live.staticflickr.com/947/41083241145_c6e0527cc5_k.jpg' , title: 'Lincoln&#x27;s Sparrow' , date: '2018' , location: 'Illinois' , tags: ['sparrow']},
  {'url': 'https://live.staticflickr.com/903/41083241205_4d1da03a34_k.jpg' , title: 'Ruby-crowned Kinglet' , date: '2018' , location: 'Illinois' , tags: []},
  {'url': 'https://live.staticflickr.com/952/41083241295_b3eec10db6_k.jpg' , title: 'Prothonotary Warbler' , date: '2018' , location: 'Illinois' , tags: ['warbler']},
  {'url': 'https://live.staticflickr.com/972/41983362011_77e6a19ffe_k.jpg' , title: 'Magnolia Warbler' , date: '2018' , location: 'Illinois' , tags: ['warbler']},
  {'url': 'https://live.staticflickr.com/900/40329629184_735cfe1f8e_k.jpg' , title: 'Dark-eyed Junco' , date: '2018' , location: 'Illinois' , tags: ['sparrow']},
  {'url': 'https://live.staticflickr.com/865/39230219130_cb91b98241_k.jpg' , title: 'Brown-headed Cowbird', date: '2018' , location: 'Illinois' , tags: []},
  {'url': 'https://live.staticflickr.com/899/40329630434_4e8c721eb6_k.jpg' , title: 'Greater Prairie-Chicken' , date: '2018', location: 'Illinois', tags: ['gamebird'] },
  {'url': 'https://live.staticflickr.com/869/27167043558_b8287e050c_k.jpg' , title: 'Greater Prairie-Chicken' , date: '2018' , location: 'Illinois', tags: ['gamebird'] },
  {'url': 'https://live.staticflickr.com/4696/40316663192_13af216329_k.jpg' , title: 'Glaucous Gull' , date: '2018' , location: 'Illinois', tags: ['gull/tern'] },
  {'url': 'https://live.staticflickr.com/4672/27808083779_f54f0ad15d_k.jpg' , title: 'American Wigeon' , date: '2017' , location: 'Illinois', tags: ['waterfowl'] },
  {'url': 'https://live.staticflickr.com/4681/27341136629_ff19bdacff_k.jpg' , title: 'Black-legged Kittiwake' , location: 'Illinois', date: '2017' , tags: ['gull/tern'] },
  {'url': 'https://live.staticflickr.com/4726/27341134449_1ee9024efa_k.jpg' , title: 'Herring Gull' , date: '2017' , location: 'Illinois', tags: ['gull/tern'] },
  {'url': 'https://live.staticflickr.com/4339/36020656063_7e91043085_k.jpg' , title: 'Short-billed Dowitcher' , date: '2017' , location: 'Illinois', tags: ['shorebird'] },
  {'url': 'https://live.staticflickr.com/4388/36659543612_7081fb9bb4_k.jpg' , title: 'Short-billed Dowitcher' , date: '2017' , location: 'Illinois', tags: ['shorebird'] },
  {'url': 'https://live.staticflickr.com/4426/36659542432_5d083717d9_k.jpg' , title: 'Halloween Pennant' , date: '2017' , location: 'Illinois', tags: ['non-bird'] },
  {'url': 'https://live.staticflickr.com/4293/35895395470_6c199efe35_k.jpg' , title: 'Rainbow', date: '2017', location: 'Arizona', tags: ['non-bird'] },
  {'url': 'https://live.staticflickr.com/4309/35895396270_c0188f751a_k.jpg' , title: 'Ladybugs' , date: '2017' , location: 'Arizona', tags: ['non-bird' ] },
  {'url': 'https://live.staticflickr.com/4307/36122398682_022130089d_k.jpg' , title: 'Western Screech-Owl', date: '2017', location: 'Arizona', tags: ['owl'  ] },
  {'url': 'https://live.staticflickr.com/4329/36122399392_0cd5e83665_k.jpg' , title: 'American Coot' , date: '2017' , location: 'Arizona', tags: [] },
  {'url': 'https://live.staticflickr.com/4328/36122400582_03e616a015_k.jpg' , title: 'Broad-billed Hummingbird' , date: '2017' , location: 'Arizona', tags: ['hummingbird'  ] },
  {'url': 'https://live.staticflickr.com/4317/36122400842_c1a5652605_k.jpg' , title: 'Violet-crowned Hummingbird' , date: '2017' , location: 'Arizona', tags: ['hummingbird'  ] },
  {'url': 'https://live.staticflickr.com/4309/36122401422_3ea6733bc0_k.jpg' , title: 'Slevin&#x27;s Bunchgrass Lizard' , date: '2017' , location: 'Arizona', tags: ['non-bird'  ] },
  {'url': 'https://live.staticflickr.com/4303/35895397010_94ca80d841_k.jpg' , title: 'Costa&#x27;s Hummingbird' , date: '2017' , location: 'Arizona', tags: ['hummingbird' ] },
  {'url': 'https://live.staticflickr.com/4308/35895397950_f88cd38df2_k.jpg' , title: 'Tufted Flycatcher' , date: '2017' , location: 'Arizona', tags: ['flycatcher' ] },
  {'url': 'https://live.staticflickr.com/4326/36247988046_b96d3b1f1c_k.jpg' , title: 'Inca Dove' , date: '2017' , location: 'Arizona', tags: [ 'dove' ] },
  {'url': 'https://live.staticflickr.com/4323/36122397372_184fb03c9a_k.jpg' , title: 'Arizona Sister' , date: '2017' , location: 'Arizona', tags: [ 'non-bird' ] },
  {'url': 'https://live.staticflickr.com/4303/36288653035_c9160e6b2c_k.jpg' , title: 'Mountains' , date: '2017' , location: 'Arizona', tags: [ 'non-bird'] },
  {'url': 'https://live.staticflickr.com/4307/36247989086_cb9dd02977_k.jpg' , title: 'White-winged Dove', date: '2017' , location: 'Arizona', tags: [ 'dove' ] },
  {'url': 'https://live.staticflickr.com/4316/35895413530_98c72dcc83_k.jpg' , title: 'Mexican Jay' , date: '2017' , location: 'Arizona', tags: [ 'jay' ] },
  {'url': 'https://live.staticflickr.com/4297/36247989296_cb330d858c_k.jpg' , title: 'Blue-throated Hummingbird' , date: '2017' , location: 'Arizona', tags: [ 'hummingbird' ] },
  {'url': 'https://live.staticflickr.com/4316/35483645793_78b3858106_k.jpg' , title: 'Black-tailed Rattlesnake' , date: '2017' , location: 'Arizona', tags: ['non-bird' ] },
  {'url': 'https://live.staticflickr.com/4322/35895402190_0185fcffaf_k.jpg' , title: 'Rivoli&#x27;s Humminbird' , date: '2017' , location: 'Arizona', tags: ['hummingbird'] },
  {'url': 'https://live.staticflickr.com/4320/36247996046_6560d9c026_k.jpg' , title: 'Wild Turkey' , date: '2017', location: 'Arizona' , tags: ['gamebird']},
  {'url': 'https://live.staticflickr.com/4330/35483647413_b9bf61aed9_k.jpg' , title: 'Yarrow&#x27;s Spiny Lizard', date: '2017', location: 'Arizona', tags: ['non-bird']},
  {'url': 'https://live.staticflickr.com/4310/35895404110_a0ca3946ac_k.jpg' , title: 'Western Desert Tarantula' , date: '2017', location: 'Arizona' , tags: ['non-bird']},
  {'url': 'https://live.staticflickr.com/4290/35670306741_b31f800570_k.jpg' , title: 'Northern Leopard Frogs' , date: '2017' , location: 'Illinois', tags: ['non-bird']},
  {'url': 'https://live.staticflickr.com/4010/35492211421_6ce9ec0ff6_k.jpg' , title: 'Bank Swallow' , date: '2017' , location: 'Illinois' , tags: ['swallow']},
  {'url': 'https://live.staticflickr.com/4278/35492211561_ebed303700_k.jpg' , title: 'Tree Swallow' , date: '2017', location: 'Illinois', tags: ['swallow']},
  {'url': 'https://live.staticflickr.com/4199/35492211761_9e82a23ecd_k.jpg' , title: 'Tricolored Heron' , date: '2017' , location: 'Illinois' , tags: ['heron']},
  {'url': 'https://live.staticflickr.com/4208/35379626586_72bd7e1c3c_k.jpg' , title: 'Barn Swallow' , date: '2017' , location: 'Illinois', tags: ['swallow']},
  {'url': 'https://live.staticflickr.com/4273/35379626466_e22d07b3d1_k.jpg' , title: 'Northern Rough-winged Swallow' , date: '2017', location: 'Illinois' , tags: ['swallow']},
  {'url': 'https://live.staticflickr.com/4256/35379626326_010f203547_k.jpg' , title: 'Hackberry Emperor' , date: '2017' , location: 'Illinois' , tags: ['non-bird']},
  {'url': 'https://live.staticflickr.com/4244/35379625866_d188402d54_k.jpg' , title: 'Painted Turtle' , date: '2017' , location: 'Illinois' , tags: ['non-bird']},
  {'url': 'https://live.staticflickr.com/4244/34866808646_9a235958b5_k.jpg' , title: 'Black-crowned Night-Heron' , date: '2017' , location: 'Illinois', tags: ['heron']},
  {'url': 'https://live.staticflickr.com/4271/34064170474_2ab59862d0_k.jpg' , title: 'American Bullfrog' , date: '2017', location: 'Illinois' , tags: ['non-bird']},
  {'url': 'https://live.staticflickr.com/4176/34354272432_c44756520c_k.jpg' , title: 'Blue-gray Gnatcatcher' , date: '2017' , location: 'Illinois' , tags: []},
  {'url': 'https://live.staticflickr.com/2819/34119845661_6f14b32cc6_k.jpg' , title: 'Henslow&#x27;s Sparrow' , date: '2017' , location: 'Illinois' , tags: ['sparrow']},
  {'url': 'https://live.staticflickr.com/3940/33744659802_4b2759d754_k.jpg' , title: 'Marbled Godwit' , date: '2017' , location: 'California' , tags: ['shorebird']},
  {'url': 'https://live.staticflickr.com/2912/33860268746_1b28041cad_k.jpg' , title: 'Black Oystercatcher' , date:  '2017' , location: 'California' , tags: ['shorebird']},
  {'url': 'https://live.staticflickr.com/2908/33088079293_2366d61f7f_k.jpg' , title: 'Double-crested Cormorant' , date:  '2017' , location: 'California' , tags: []},
  {'url': 'https://live.staticflickr.com/2849/33860276296_9e3cfbba6f_k.jpg' , title: 'Cassin&#x27;s Kingbird' , date: '2017' , location: 'California' , tags: ['flycatcher']},
  {'url': 'https://live.staticflickr.com/3928/33088079653_45efad389d_k.jpg' , title: 'Western Gull' , date: '2017' , location: 'California' , tags: ['gull/tern']},
  {'url': 'https://live.staticflickr.com/2933/32900264761_c7c450163e_k.jpg' , title: 'Downy Woodpecker' , date: '2017' , location: 'Illinois' , tags: ['woodpecker']},
  {'url': 'https://live.staticflickr.com/2147/32900265261_26cb851c06_k.jpg' , title: 'Red-bellied Woodpecker', date: '2017' , location: 'Illinois' , tags: ['woodpecker']},
  {'url': 'https://live.staticflickr.com/2233/32900265661_cdd6a170b0_k.jpg' , title: 'White-breasted Nuthatch' , date: '2017' , location: 'Illinois' , tags: []},
  {'url': 'https://live.staticflickr.com/2247/32181442294_d94d35efff_k.jpg' , title: 'Long-eared Owl' , date: '2017' , location: 'Illinois' , tags: ['owl']},
  {'url': 'https://live.staticflickr.com/2330/32971961075_b4d1404835_k.jpg' , title: 'Red-breasted Nuthatch', date: '2017' , location: 'Illinois' , tags: []},
  {'url': 'https://live.staticflickr.com/615/32216539020_0e012fdabc_k.jpg' , title: 'Brown Creeper' , date: '2017' , location: 'Illinois' , tags: []},
  {'url': 'https://live.staticflickr.com/769/31299226103_f9b529a126_k.jpg' , title: 'American Robin' , date: '2016' , location: 'Illinois' , tags: ['thrush']},
  {'url': 'https://live.staticflickr.com/7580/27649365685_0e399ad018_k.jpg' , title: 'Black-bellied Whistling-Duck' , date: '2016', location: 'Illinois' , tags: ['waterfowl']},
  {'url': 'https://live.staticflickr.com/7093/26968012421_80ea3d996f_k.jpg' ,title: 'Black-capped Chickadee' , date: '2016' , location: 'Illinois' , tags: []}, 
  {'url': 'https://live.staticflickr.com/7578/26968011331_bf9f7a6d8a_k.jpg' , title: 'American Redstart' , date: '2016' , location: 'Illinois' , tags: ['warbler']}, 
  {'url': 'https://live.staticflickr.com/7048/26968009001_958aa5cf3b_h.jpg' , title: 'Piping Plover' , date: '2016' , location: 'Illinois' , tags: ['shorebird']}, 
  {'url': 'https://live.staticflickr.com/757/21784920861_e0a9e86102_h.jpg' , title: 'White-eyed Vireo' , date: '2015' , location: 'Illinois' , tags: []},
  {'url': 'https://live.staticflickr.com/754/21587456910_b917dd5b6d_h.jpg' , title: 'Viceroy' , date: '2015' , location: 'Illinois' , tags: ['non-bird']},
  {'url': 'https://live.staticflickr.com/391/19183611454_323c1dedb1_h.jpg' , title: 'Elk' , date: '2015' , location: 'Colorado' , tags: ['non-bird']},
  {'url': 'https://live.staticflickr.com/3687/19185312353_602f6f4393_h.jpg' , title: 'Clark&#x27;s Nutcracker' , date: '2015' , location: 'Colorado' , tags: []},
  {'url': 'https://live.staticflickr.com/5624/24021777452_2f9954d9dd_h.jpg' , title: 'Cordilleran Flycatcher' , date: '2015' , location: 'Colorado' , tags: ['flycatcher']},
  {'url': 'https://live.staticflickr.com/285/19618201998_e2f2a32e29_h.jpg' , title: 'White-tailed Ptarmigan', date: '2015' , location: 'Colorado' , tags: ['gamebird']},
  {'url': 'https://live.staticflickr.com/434/19780023986_ccc9632340_h.jpg' , title:  'Dusky Grouse', date: '2015' , location: 'Colorado' , tags: ['gamebird']},
  {'url': 'https://live.staticflickr.com/493/19806217595_dc8f3fa867_h.jpg' , title: 'Yellow-headed Blackbird' , date: '2015' , location: 'Colorado' , tags: []},
  {'url': 'https://live.staticflickr.com/433/19798894182_2d461ba24d_h.jpg' , title: 'Yellow-rumped ¨Audubons¨ Warbler' , date: '2015' , location: 'Colorado' , tags: ['warbler']},
  {'url': 'https://live.staticflickr.com/462/19806216965_2842787b18_h.jpg' , title: 'Misty Mountain' , date: '2015' , location: 'Colorado' , tags: ['non-bird']},
  {'url': 'https://live.staticflickr.com/3751/18241007923_11e81365b8_h.jpg' , title: 'Red Phalarope' , date: '2014' , location: 'Illinois' , tags: ['shorebird']}
]

const drop_btn = document.querySelector(".drop-btn span");
const tooltip = document.querySelector(".tooltip");
const menu_wrapper = document.querySelector(".wrapper");
const menu_bar = document.querySelector(".menu-bar");
const date_drop = document.querySelector(".date-drop");
const location_drop = document.querySelector(".location-drop");
const tags_drop = document.querySelector(".tags-drop");
const date_item = document.querySelector(".date-item");
const location_item = document.querySelector(".location-item");
const tags_item = document.querySelector(".tags-item");
const date_btn = document.querySelector(".back-date-btn");
const location_btn = document.querySelector(".back-location-btn");
const tags_btn = document.querySelector(".back-tags-btn");

drop_btn.onclick = (()=>{
  menu_wrapper.classList.toggle("show");
  tooltip.classList.toggle("show");
});
date_item.onclick = (()=>{
  menu_bar.style.marginLeft = "-400px";
  setTimeout(()=>{
    date_drop.style.display = "block";
  }, 100);
});
location_item.onclick = (()=>{
  menu_bar.style.marginLeft = "-400px";
  setTimeout(()=>{
    location_drop.style.display = "block";
  }, 100);
});
tags_item.onclick = (()=>{
    menu_bar.style.marginLeft = "-400px";
    setTimeout(()=>{
      tags_drop.style.display = "block";
    }, 100);
  });
date_btn.onclick = (()=>{
  menu_bar.style.marginLeft = "0px";
  date_drop.style.display = "none";
});
location_btn.onclick = (()=>{
  location_drop.style.display = "none";
  menu_bar.style.marginLeft = "0px";
});
tags_btn.onclick = (()=>{
    tags_drop.style.display = "none";
    menu_bar.style.marginLeft = "0px";
  });

function onLoad() {
    imgs.forEach(elem => {
        document.querySelector(".img_container").innerHTML += `
        <a class="gal" href="${elem.url}" data-lightbox="image" data-title="${elem.title}">
            <img href="${elem.url}" src="${elem.url}" data-title="${elem.title}" data-date="${elem.date}" data-location="${elem.location}">
            </a>`
    }) 
}
onLoad();


function filterDate(item) {
    console.log(item);
    document.querySelector(".img_container").innerHTML = ''
    imgs.forEach(elem => {
        if (elem.date == item) {
            document.querySelector(".img_container").innerHTML += `
                <a class="gal" href="${elem.url}" data-lightbox="image" data-title="${elem.title}">
                    <img href="${elem.url}" src="${elem.url}" data-title="${elem.title}" data-date="${elem.date}" data-location="${elem.location}">
                    </a>`
        }})
    menu_bar.style.marginLeft = "0px";
    date_drop.style.display = "none";
    menu_wrapper.classList.toggle("show");
    tooltip.classList.toggle("show");

}

function filterLoc(item) {
    console.log(item);
    document.querySelector(".img_container").innerHTML = ''
    imgs.forEach(elem => {
        if (elem.location == item) {
            document.querySelector(".img_container").innerHTML += `
                <a class="gal" href="${elem.url}" data-lightbox="image" data-title="${elem.title}">
                    <img href="${elem.url}" src="${elem.url}" data-title="${elem.title}" data-date="${elem.date}" data-location="${elem.location}">
                    </a>`
        }})  
    location_drop.style.display = "none";
    menu_bar.style.marginLeft = "0px";  
    menu_wrapper.classList.toggle("show");
    tooltip.classList.toggle("show");
}


function filterTag(item) {
    console.log(item);
    document.querySelector(".img_container").innerHTML = ''
    imgs.forEach(elem => {
        if (elem.tags.includes(item)) {
            document.querySelector(".img_container").innerHTML += `
                <a class="gal" href="${elem.url}" data-lightbox="image" data-title="${elem.title}">
                    <img href="${elem.url}" src="${elem.url}" data-title="${elem.title}" data-date="${elem.date}" data-location="${elem.location}">
                    </a>`
        }})    
    tags_drop.style.display = "none";
    menu_bar.style.marginLeft = "0px";
    menu_wrapper.classList.toggle("show");
    tooltip.classList.toggle("show");
}
