var group__adc16__hal =
[
    [ "adc16_chn_config_t", "group__adc16__hal.html#structadc16__chn__config__t", [
      [ "chnIdx", "group__adc16__hal.html#ga8d381194b6654d1764cbef91eb6e0047", null ],
      [ "convCompletedIntEnable", "group__adc16__hal.html#gacaf6285b9e173fb9495d9ab1cacfdf4b", null ]
    ] ],
    [ "adc16_converter_config_t", "group__adc16__hal.html#structadc16__converter__config__t", [
      [ "lowPowerEnable", "group__adc16__hal.html#ga6e48a09505abf40b2242a63f73a10e9b", null ],
      [ "clkDividerMode", "group__adc16__hal.html#ga29362b0ba3d5762dc3afe862e32fca89", null ],
      [ "longSampleTimeEnable", "group__adc16__hal.html#ga37f95b8e685dfc575c5ef11d18dfab70", null ],
      [ "resolution", "group__adc16__hal.html#ga312a806a6df8d433a624d67283cd8dd9", null ],
      [ "clkSrc", "group__adc16__hal.html#ga8557c61c70e1c51f7b148226ee7ada55", null ],
      [ "asyncClkEnable", "group__adc16__hal.html#gab823bf1c329f9cf94840ae5831cc1a2f", null ],
      [ "highSpeedEnable", "group__adc16__hal.html#ga5cddb128bb6f8c295c1236b28e4e4686", null ],
      [ "longSampleCycleMode", "group__adc16__hal.html#ga6b6773e8209dc7b2cef7c6a87cc57ff2", null ],
      [ "hwTriggerEnable", "group__adc16__hal.html#gabdb0ba28d682863cc2f01004e5e2d492", null ],
      [ "refVoltSrc", "group__adc16__hal.html#ga6c51aff727b15a9be4ee8d5e77c27856", null ],
      [ "continuousConvEnable", "group__adc16__hal.html#gabaac67c37e211b8c125d32f75585c0c3", null ]
    ] ],
    [ "adc16_hw_cmp_config_t", "group__adc16__hal.html#structadc16__hw__cmp__config__t", [
      [ "hwCmpEnable", "group__adc16__hal.html#ga961444ed7f013bd8c01a1bd4149f08f2", null ],
      [ "hwCmpGreaterThanEnable", "group__adc16__hal.html#ga81d2f61429fbfd60b9b4dbff37265cc0", null ],
      [ "hwCmpRangeEnable", "group__adc16__hal.html#ga41b1301fd632ff96df6d07caa1d07aef", null ],
      [ "cmpValue1", "group__adc16__hal.html#gad77b3f1f29b16e3beb62d7a8ff263307", null ],
      [ "cmpValue2", "group__adc16__hal.html#ga4c1fc65d86c8641bd1deb404ba005664", null ]
    ] ],
    [ "adc16_status_t", "group__adc16__hal.html#gac9b29f9f5038da27bcd2266d478ad852", [
      [ "kStatus_ADC16_Success", "group__adc16__hal.html#ggac9b29f9f5038da27bcd2266d478ad852a6ce3ed26d18c3f52b8b3b6bee0795604", null ],
      [ "kStatus_ADC16_InvalidArgument", "group__adc16__hal.html#ggac9b29f9f5038da27bcd2266d478ad852a65712716412508b534826531960b635d", null ],
      [ "kStatus_ADC16_Failed", "group__adc16__hal.html#ggac9b29f9f5038da27bcd2266d478ad852a63cd30afc2d3c5f365c9ef2c3ff17ad3", null ]
    ] ],
    [ "adc16_clk_divider_t", "group__adc16__hal.html#gae99198da157f45c6e18276d9635dd175", [
      [ "kAdc16ClkDividerOf1", "group__adc16__hal.html#ggae99198da157f45c6e18276d9635dd175a71e0aba295f1b0941246b46ad55b4055", null ],
      [ "kAdc16ClkDividerOf2", "group__adc16__hal.html#ggae99198da157f45c6e18276d9635dd175a3cb136cccd19680d951d83de3b422f3c", null ],
      [ "kAdc16ClkDividerOf4", "group__adc16__hal.html#ggae99198da157f45c6e18276d9635dd175a1ce9e78fd04278f229caeb75c3b81fd1", null ],
      [ "kAdc16ClkDividerOf8", "group__adc16__hal.html#ggae99198da157f45c6e18276d9635dd175afc33b501d99e3985a741ba6f47c0b8b9", null ]
    ] ],
    [ "adc16_resolution_t", "group__adc16__hal.html#ga3c486d74a85124e7f8a82c39d1be9b7b", [
      [ "kAdc16ResolutionBitOf8or9", "group__adc16__hal.html#gga3c486d74a85124e7f8a82c39d1be9b7ba60f5c7a96c6498945b43a2d739628b40", null ],
      [ "kAdc16ResolutionBitOfSingleEndAs8", "group__adc16__hal.html#gga3c486d74a85124e7f8a82c39d1be9b7bacd9e8f8b1a47d0e4278dff1345b6e6d4", null ],
      [ "kAdc16ResolutionBitOfDiffModeAs9", "group__adc16__hal.html#gga3c486d74a85124e7f8a82c39d1be9b7ba50edfa1898883f6cfcffc114fd9a6c5b", null ],
      [ "kAdc16ResolutionBitOf12or13", "group__adc16__hal.html#gga3c486d74a85124e7f8a82c39d1be9b7baad908e1d3c480f258c7fa1112d95928d", null ],
      [ "kAdc16ResolutionBitOfSingleEndAs12", "group__adc16__hal.html#gga3c486d74a85124e7f8a82c39d1be9b7ba656d0e1af9a44928ad808006c38db328", null ],
      [ "kAdc16ResolutionBitOfDiffModeAs13", "group__adc16__hal.html#gga3c486d74a85124e7f8a82c39d1be9b7bacda910293025579f90f5c1183fb2e9fb", null ],
      [ "kAdc16ResolutionBitOf10or11", "group__adc16__hal.html#gga3c486d74a85124e7f8a82c39d1be9b7ba087046584ce48397dd82555628951342", null ],
      [ "kAdc16ResolutionBitOfSingleEndAs10", "group__adc16__hal.html#gga3c486d74a85124e7f8a82c39d1be9b7ba7a5be37d2547cfe13d7bacd947639a7d", null ],
      [ "kAdc16ResolutionBitOfDiffModeAs11", "group__adc16__hal.html#gga3c486d74a85124e7f8a82c39d1be9b7ba19d7a1b07224d4fd2811353423580210", null ]
    ] ],
    [ "adc16_clk_src_mode_t", "group__adc16__hal.html#gaacf2a9848b5792cb59465fa0cabec842", [
      [ "kAdc16ClkSrcOfBusClk", "group__adc16__hal.html#ggaacf2a9848b5792cb59465fa0cabec842aa73522c254968c2ef58d0d4f33c7bc58", null ],
      [ "kAdc16ClkSrcOfAltClk2", "group__adc16__hal.html#ggaacf2a9848b5792cb59465fa0cabec842a74cd2caa8aaca68f23d9f650f5d47e77", null ],
      [ "kAdc16ClkSrcOfAltClk", "group__adc16__hal.html#ggaacf2a9848b5792cb59465fa0cabec842a8ab342e6c25d867bcc7eea3d29b6ef17", null ],
      [ "kAdc16ClkSrcOfAsynClk", "group__adc16__hal.html#ggaacf2a9848b5792cb59465fa0cabec842a276f12a66ff5530ddb0bf80714dbe217", null ]
    ] ],
    [ "adc16_long_sample_cycle_t", "group__adc16__hal.html#gacd3feaf8c7be25e9a792d447dc6c33b2", [
      [ "kAdc16LongSampleCycleOf24", "group__adc16__hal.html#ggacd3feaf8c7be25e9a792d447dc6c33b2a39da029da30f1b71ea31920dc7f072b9", null ],
      [ "kAdc16LongSampleCycleOf16", "group__adc16__hal.html#ggacd3feaf8c7be25e9a792d447dc6c33b2a4fe0d938ee8229bd36a009675eb162ba", null ],
      [ "kAdc16LongSampleCycleOf10", "group__adc16__hal.html#ggacd3feaf8c7be25e9a792d447dc6c33b2ae698e238d7a9d835d94ae63c4cdbc7dc", null ],
      [ "kAdc16LongSampleCycleOf6", "group__adc16__hal.html#ggacd3feaf8c7be25e9a792d447dc6c33b2abfadf13be2abb2e110444fa43f07ceec", null ]
    ] ],
    [ "adc16_ref_volt_src_t", "group__adc16__hal.html#ga736d2a116a7847613e2934788911e11c", [
      [ "kAdc16RefVoltSrcOfVref", "group__adc16__hal.html#gga736d2a116a7847613e2934788911e11ca7e69a14ab0e75e3153d67fa9dbf9d3a1", null ],
      [ "kAdc16RefVoltSrcOfValt", "group__adc16__hal.html#gga736d2a116a7847613e2934788911e11ca419db515b6f0c8deb854e22871492e2c", null ]
    ] ],
    [ "adc16_chn_t", "group__adc16__hal.html#ga80812cecdfb0d5824abf4bddef68c7e8", [
      [ "kAdc16Chn0", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8a4ccada8b848dd4e8f18366385f8a2e9d", null ],
      [ "kAdc16Chn1", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8a80e24988b332a8837fd40020be1c1d2d", null ],
      [ "kAdc16Chn2", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8a4093bb11c5ffe69355cbb427c7456ac3", null ],
      [ "kAdc16Chn3", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8a5a98242ad8518e1867dfd8cca1cb8fc0", null ],
      [ "kAdc16Chn4", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8a6bb58b4377f0508362172e1edceea29b", null ],
      [ "kAdc16Chn5", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8af48c860806d87ac90eedc330557808b9", null ],
      [ "kAdc16Chn6", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8a278625875fc6d91aaf870324e12da235", null ],
      [ "kAdc16Chn7", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8ae21a1d67c9f6833af1abf77a8fce35d7", null ],
      [ "kAdc16Chn8", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8a4c683fe60badbbb0d2704ae85a274428", null ],
      [ "kAdc16Chn9", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8a8c55833c765f81b5598cb261535d6c77", null ],
      [ "kAdc16Chn10", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8a1357a33116b7b119b33637b741f5deb0", null ],
      [ "kAdc16Chn11", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8aee32daf892c69f5f1b891820d99d0ce7", null ],
      [ "kAdc16Chn12", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8ad9384d5219f77b36f91aa15c0f94aaa7", null ],
      [ "kAdc16Chn13", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8adf1d2d686d3c338513be65679b19b028", null ],
      [ "kAdc16Chn14", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8a1acf49b753f44d0907d86763c0087226", null ],
      [ "kAdc16Chn15", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8a918fe1a1df348673679cadcdb964d00c", null ],
      [ "kAdc16Chn16", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8aa52c3630b53a462d433e8240948cd490", null ],
      [ "kAdc16Chn17", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8af76b772bf999c8bc4b04fd2fbaf13f0d", null ],
      [ "kAdc16Chn18", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8a153c6c05bc7aed8f7c7e2d36b29fb761", null ],
      [ "kAdc16Chn19", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8a53f2227d3e2d43241846d5d0a4f76c8c", null ],
      [ "kAdc16Chn20", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8a3656f1dc5f68a00b4cd47ee643eef491", null ],
      [ "kAdc16Chn21", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8a934cc00972cb2c73611478e7ac2023c1", null ],
      [ "kAdc16Chn22", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8a693427e82886d06919e16902d06cfc24", null ],
      [ "kAdc16Chn23", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8a92131c03fb5942ec02d9df886556ac3d", null ],
      [ "kAdc16Chn24", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8aaa25bb7ab4b7059dd6d67006953be406", null ],
      [ "kAdc16Chn25", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8a45ef940b68dcc8f2cb26e09697e4cd17", null ],
      [ "kAdc16Chn26", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8a67f52f9af0a2e97aed15fe903396dc10", null ],
      [ "kAdc16Chn27", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8acd02602cb1301edfa9f5810c4b58f742", null ],
      [ "kAdc16Chn28", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8a607f4be4e8e1e7f64e7808afec2000df", null ],
      [ "kAdc16Chn29", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8afc08394bb91f5dac748c45c06606fcd5", null ],
      [ "kAdc16Chn30", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8a386d3556298b46d9ccc11f5ac7258f4b", null ],
      [ "kAdc16Chn31", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8ab3c49878d48930af54660a2ca8f8543d", null ],
      [ "kAdc16Chn0d", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8abf8e865bd86f8283efad095577fdd37f", null ],
      [ "kAdc16Chn1d", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8ae24b3fc237af33b856615ae683404aa5", null ],
      [ "kAdc16Chn2d", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8a3f330429a1dc9c62d85d9bc43b74b976", null ],
      [ "kAdc16Chn3d", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8ab540f0ab68b52ec3a8d6a955cb242ef0", null ],
      [ "kAdc16Chn4a", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8a182a529ff0e97b544e0531223589e4aa", null ],
      [ "kAdc16Chn5a", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8af2106df2528802901ce2234723ea2573", null ],
      [ "kAdc16Chn6a", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8ab601bee3cd00084e0d623770b8e11d9f", null ],
      [ "kAdc16Chn7a", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8aa58a2ea674339812dc42b27c787e7dc7", null ],
      [ "kAdc16Chn4b", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8a70eec1ccb8174fc3c65d69cd9445bf31", null ],
      [ "kAdc16Chn5b", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8a107d4ec04a3661860a56c43264e4c59b", null ],
      [ "kAdc16Chn6b", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8a324d56645e0280eb003f491d10c30dad", null ],
      [ "kAdc16Chn7b", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8ab37e3263ddfeda3f3754ea96c930f560", null ]
    ] ],
    [ "kStatus_ADC16_Success", "group__adc16__hal.html#ggac9b29f9f5038da27bcd2266d478ad852a6ce3ed26d18c3f52b8b3b6bee0795604", null ],
    [ "kStatus_ADC16_InvalidArgument", "group__adc16__hal.html#ggac9b29f9f5038da27bcd2266d478ad852a65712716412508b534826531960b635d", null ],
    [ "kStatus_ADC16_Failed", "group__adc16__hal.html#ggac9b29f9f5038da27bcd2266d478ad852a63cd30afc2d3c5f365c9ef2c3ff17ad3", null ],
    [ "kAdc16ClkDividerOf1", "group__adc16__hal.html#ggae99198da157f45c6e18276d9635dd175a71e0aba295f1b0941246b46ad55b4055", null ],
    [ "kAdc16ClkDividerOf2", "group__adc16__hal.html#ggae99198da157f45c6e18276d9635dd175a3cb136cccd19680d951d83de3b422f3c", null ],
    [ "kAdc16ClkDividerOf4", "group__adc16__hal.html#ggae99198da157f45c6e18276d9635dd175a1ce9e78fd04278f229caeb75c3b81fd1", null ],
    [ "kAdc16ClkDividerOf8", "group__adc16__hal.html#ggae99198da157f45c6e18276d9635dd175afc33b501d99e3985a741ba6f47c0b8b9", null ],
    [ "kAdc16ResolutionBitOf8or9", "group__adc16__hal.html#gga3c486d74a85124e7f8a82c39d1be9b7ba60f5c7a96c6498945b43a2d739628b40", null ],
    [ "kAdc16ResolutionBitOfSingleEndAs8", "group__adc16__hal.html#gga3c486d74a85124e7f8a82c39d1be9b7bacd9e8f8b1a47d0e4278dff1345b6e6d4", null ],
    [ "kAdc16ResolutionBitOfDiffModeAs9", "group__adc16__hal.html#gga3c486d74a85124e7f8a82c39d1be9b7ba50edfa1898883f6cfcffc114fd9a6c5b", null ],
    [ "kAdc16ResolutionBitOf12or13", "group__adc16__hal.html#gga3c486d74a85124e7f8a82c39d1be9b7baad908e1d3c480f258c7fa1112d95928d", null ],
    [ "kAdc16ResolutionBitOfSingleEndAs12", "group__adc16__hal.html#gga3c486d74a85124e7f8a82c39d1be9b7ba656d0e1af9a44928ad808006c38db328", null ],
    [ "kAdc16ResolutionBitOfDiffModeAs13", "group__adc16__hal.html#gga3c486d74a85124e7f8a82c39d1be9b7bacda910293025579f90f5c1183fb2e9fb", null ],
    [ "kAdc16ResolutionBitOf10or11", "group__adc16__hal.html#gga3c486d74a85124e7f8a82c39d1be9b7ba087046584ce48397dd82555628951342", null ],
    [ "kAdc16ResolutionBitOfSingleEndAs10", "group__adc16__hal.html#gga3c486d74a85124e7f8a82c39d1be9b7ba7a5be37d2547cfe13d7bacd947639a7d", null ],
    [ "kAdc16ResolutionBitOfDiffModeAs11", "group__adc16__hal.html#gga3c486d74a85124e7f8a82c39d1be9b7ba19d7a1b07224d4fd2811353423580210", null ],
    [ "kAdc16ClkSrcOfBusClk", "group__adc16__hal.html#ggaacf2a9848b5792cb59465fa0cabec842aa73522c254968c2ef58d0d4f33c7bc58", null ],
    [ "kAdc16ClkSrcOfAltClk2", "group__adc16__hal.html#ggaacf2a9848b5792cb59465fa0cabec842a74cd2caa8aaca68f23d9f650f5d47e77", null ],
    [ "kAdc16ClkSrcOfAltClk", "group__adc16__hal.html#ggaacf2a9848b5792cb59465fa0cabec842a8ab342e6c25d867bcc7eea3d29b6ef17", null ],
    [ "kAdc16ClkSrcOfAsynClk", "group__adc16__hal.html#ggaacf2a9848b5792cb59465fa0cabec842a276f12a66ff5530ddb0bf80714dbe217", null ],
    [ "kAdc16LongSampleCycleOf24", "group__adc16__hal.html#ggacd3feaf8c7be25e9a792d447dc6c33b2a39da029da30f1b71ea31920dc7f072b9", null ],
    [ "kAdc16LongSampleCycleOf16", "group__adc16__hal.html#ggacd3feaf8c7be25e9a792d447dc6c33b2a4fe0d938ee8229bd36a009675eb162ba", null ],
    [ "kAdc16LongSampleCycleOf10", "group__adc16__hal.html#ggacd3feaf8c7be25e9a792d447dc6c33b2ae698e238d7a9d835d94ae63c4cdbc7dc", null ],
    [ "kAdc16LongSampleCycleOf6", "group__adc16__hal.html#ggacd3feaf8c7be25e9a792d447dc6c33b2abfadf13be2abb2e110444fa43f07ceec", null ],
    [ "kAdc16RefVoltSrcOfVref", "group__adc16__hal.html#gga736d2a116a7847613e2934788911e11ca7e69a14ab0e75e3153d67fa9dbf9d3a1", null ],
    [ "kAdc16RefVoltSrcOfValt", "group__adc16__hal.html#gga736d2a116a7847613e2934788911e11ca419db515b6f0c8deb854e22871492e2c", null ],
    [ "kAdc16Chn0", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8a4ccada8b848dd4e8f18366385f8a2e9d", null ],
    [ "kAdc16Chn1", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8a80e24988b332a8837fd40020be1c1d2d", null ],
    [ "kAdc16Chn2", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8a4093bb11c5ffe69355cbb427c7456ac3", null ],
    [ "kAdc16Chn3", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8a5a98242ad8518e1867dfd8cca1cb8fc0", null ],
    [ "kAdc16Chn4", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8a6bb58b4377f0508362172e1edceea29b", null ],
    [ "kAdc16Chn5", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8af48c860806d87ac90eedc330557808b9", null ],
    [ "kAdc16Chn6", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8a278625875fc6d91aaf870324e12da235", null ],
    [ "kAdc16Chn7", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8ae21a1d67c9f6833af1abf77a8fce35d7", null ],
    [ "kAdc16Chn8", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8a4c683fe60badbbb0d2704ae85a274428", null ],
    [ "kAdc16Chn9", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8a8c55833c765f81b5598cb261535d6c77", null ],
    [ "kAdc16Chn10", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8a1357a33116b7b119b33637b741f5deb0", null ],
    [ "kAdc16Chn11", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8aee32daf892c69f5f1b891820d99d0ce7", null ],
    [ "kAdc16Chn12", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8ad9384d5219f77b36f91aa15c0f94aaa7", null ],
    [ "kAdc16Chn13", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8adf1d2d686d3c338513be65679b19b028", null ],
    [ "kAdc16Chn14", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8a1acf49b753f44d0907d86763c0087226", null ],
    [ "kAdc16Chn15", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8a918fe1a1df348673679cadcdb964d00c", null ],
    [ "kAdc16Chn16", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8aa52c3630b53a462d433e8240948cd490", null ],
    [ "kAdc16Chn17", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8af76b772bf999c8bc4b04fd2fbaf13f0d", null ],
    [ "kAdc16Chn18", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8a153c6c05bc7aed8f7c7e2d36b29fb761", null ],
    [ "kAdc16Chn19", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8a53f2227d3e2d43241846d5d0a4f76c8c", null ],
    [ "kAdc16Chn20", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8a3656f1dc5f68a00b4cd47ee643eef491", null ],
    [ "kAdc16Chn21", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8a934cc00972cb2c73611478e7ac2023c1", null ],
    [ "kAdc16Chn22", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8a693427e82886d06919e16902d06cfc24", null ],
    [ "kAdc16Chn23", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8a92131c03fb5942ec02d9df886556ac3d", null ],
    [ "kAdc16Chn24", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8aaa25bb7ab4b7059dd6d67006953be406", null ],
    [ "kAdc16Chn25", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8a45ef940b68dcc8f2cb26e09697e4cd17", null ],
    [ "kAdc16Chn26", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8a67f52f9af0a2e97aed15fe903396dc10", null ],
    [ "kAdc16Chn27", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8acd02602cb1301edfa9f5810c4b58f742", null ],
    [ "kAdc16Chn28", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8a607f4be4e8e1e7f64e7808afec2000df", null ],
    [ "kAdc16Chn29", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8afc08394bb91f5dac748c45c06606fcd5", null ],
    [ "kAdc16Chn30", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8a386d3556298b46d9ccc11f5ac7258f4b", null ],
    [ "kAdc16Chn31", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8ab3c49878d48930af54660a2ca8f8543d", null ],
    [ "kAdc16Chn0d", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8abf8e865bd86f8283efad095577fdd37f", null ],
    [ "kAdc16Chn1d", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8ae24b3fc237af33b856615ae683404aa5", null ],
    [ "kAdc16Chn2d", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8a3f330429a1dc9c62d85d9bc43b74b976", null ],
    [ "kAdc16Chn3d", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8ab540f0ab68b52ec3a8d6a955cb242ef0", null ],
    [ "kAdc16Chn4a", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8a182a529ff0e97b544e0531223589e4aa", null ],
    [ "kAdc16Chn5a", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8af2106df2528802901ce2234723ea2573", null ],
    [ "kAdc16Chn6a", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8ab601bee3cd00084e0d623770b8e11d9f", null ],
    [ "kAdc16Chn7a", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8aa58a2ea674339812dc42b27c787e7dc7", null ],
    [ "kAdc16Chn4b", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8a70eec1ccb8174fc3c65d69cd9445bf31", null ],
    [ "kAdc16Chn5b", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8a107d4ec04a3661860a56c43264e4c59b", null ],
    [ "kAdc16Chn6b", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8a324d56645e0280eb003f491d10c30dad", null ],
    [ "kAdc16Chn7b", "group__adc16__hal.html#gga80812cecdfb0d5824abf4bddef68c7e8ab37e3263ddfeda3f3754ea96c930f560", null ],
    [ "ADC16_HAL_Init", "group__adc16__hal.html#ga3a57b43217c7a652572dc2f962c28a6b", null ],
    [ "ADC16_HAL_ConfigChn", "group__adc16__hal.html#gad76cb3ffa3060e8a8d8c941fd21d4149", null ],
    [ "ADC16_HAL_GetChnConvCompletedFlag", "group__adc16__hal.html#gac088d2ee6ccd82471c7f0fac67fabbbd", null ],
    [ "ADC16_HAL_ConfigConverter", "group__adc16__hal.html#gac93def27d40f29e3b42b35d5ba2ecb0a", null ],
    [ "ADC16_HAL_ConfigHwCompare", "group__adc16__hal.html#gacf7fcf98f6e656d69ac7411d28a84aec", null ],
    [ "ADC16_HAL_GetChnConvValue", "group__adc16__hal.html#gaaed1949932ca4fe66f0f6ad80d5cf889", null ],
    [ "ADC16_HAL_GetConvActiveFlag", "group__adc16__hal.html#ga09bd6f57d2f975a88cd3a41d51dc9ed5", null ],
    [ "chnIdx", "group__adc16__hal.html#ga8d381194b6654d1764cbef91eb6e0047", null ],
    [ "convCompletedIntEnable", "group__adc16__hal.html#gacaf6285b9e173fb9495d9ab1cacfdf4b", null ],
    [ "lowPowerEnable", "group__adc16__hal.html#ga6e48a09505abf40b2242a63f73a10e9b", null ],
    [ "clkDividerMode", "group__adc16__hal.html#ga29362b0ba3d5762dc3afe862e32fca89", null ],
    [ "longSampleTimeEnable", "group__adc16__hal.html#ga37f95b8e685dfc575c5ef11d18dfab70", null ],
    [ "resolution", "group__adc16__hal.html#ga312a806a6df8d433a624d67283cd8dd9", null ],
    [ "clkSrc", "group__adc16__hal.html#ga8557c61c70e1c51f7b148226ee7ada55", null ],
    [ "asyncClkEnable", "group__adc16__hal.html#gab823bf1c329f9cf94840ae5831cc1a2f", null ],
    [ "highSpeedEnable", "group__adc16__hal.html#ga5cddb128bb6f8c295c1236b28e4e4686", null ],
    [ "longSampleCycleMode", "group__adc16__hal.html#ga6b6773e8209dc7b2cef7c6a87cc57ff2", null ],
    [ "hwTriggerEnable", "group__adc16__hal.html#gabdb0ba28d682863cc2f01004e5e2d492", null ],
    [ "refVoltSrc", "group__adc16__hal.html#ga6c51aff727b15a9be4ee8d5e77c27856", null ],
    [ "continuousConvEnable", "group__adc16__hal.html#gabaac67c37e211b8c125d32f75585c0c3", null ],
    [ "hwCmpEnable", "group__adc16__hal.html#ga961444ed7f013bd8c01a1bd4149f08f2", null ],
    [ "hwCmpGreaterThanEnable", "group__adc16__hal.html#ga81d2f61429fbfd60b9b4dbff37265cc0", null ],
    [ "hwCmpRangeEnable", "group__adc16__hal.html#ga41b1301fd632ff96df6d07caa1d07aef", null ],
    [ "cmpValue1", "group__adc16__hal.html#gad77b3f1f29b16e3beb62d7a8ff263307", null ],
    [ "cmpValue2", "group__adc16__hal.html#ga4c1fc65d86c8641bd1deb404ba005664", null ]
];