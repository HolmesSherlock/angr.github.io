Search.setIndex({envversion:47,filenames:["angr","archinfo","claripy","cle","index","pyvex","simuvex"],objects:{"":{archinfo:[1,0,0,"-"],claripy:[2,0,0,"-"],cle:[3,0,0,"-"],pyvex:[5,0,0,"-"],simuvex:[6,0,0,"-"]},"archinfo.arch":{Arch:[1,1,1,""]},"archinfo.arch.Arch":{bytes:[1,2,1,""],int_bits:[1,2,1,""]},"claripy.ast":{"int":[2,0,0,"-"],base:[2,0,0,"-"],bits:[2,0,0,"-"],bool:[2,0,0,"-"],bv:[2,0,0,"-"],fp:[2,0,0,"-"],vs:[2,0,0,"-"]},"claripy.ast.base":{Base:[2,1,1,""]},"claripy.ast.base.Base":{depth:[2,2,1,""],ite_burrowed:[2,2,1,""],ite_excavated:[2,2,1,""],make_uuid:[2,3,1,""],replace:[2,3,1,""],replace_dict:[2,3,1,""],split:[2,3,1,""],structurally_match:[2,3,1,""],swap_args:[2,3,1,""],uc_alloc_depth:[2,2,1,""],uninitialized:[2,2,1,""]},"claripy.ast.bool":{BoolS:[2,4,1,""],constraint_to_si:[2,4,1,""]},"claripy.ast.bv":{BVS:[2,4,1,""],BVV:[2,4,1,""]},"claripy.ast.fp":{FPS:[2,4,1,""],FPV:[2,4,1,""]},"claripy.backend":{Backend:[2,1,1,""]},"claripy.backend.Backend":{add:[2,3,1,""],batch_eval:[2,3,1,""],call:[2,3,1,""],cardinality:[2,3,1,""],check:[2,3,1,""],convert:[2,3,1,""],downsize:[2,3,1,""],eval:[2,3,1,""],handles:[2,3,1,""],has_false:[2,3,1,""],has_true:[2,3,1,""],identical:[2,3,1,""],is_false:[2,3,1,""],is_true:[2,3,1,""],max:[2,3,1,""],max_values:[2,3,1,""],min:[2,3,1,""],min_values:[2,3,1,""],name:[2,3,1,""],results:[2,3,1,""],size:[2,3,1,""],solution:[2,3,1,""],solver:[2,3,1,""]},"claripy.backend_object":{BackendObject:[2,1,1,""]},"claripy.backend_object.BackendObject":{to_claripy:[2,3,1,""]},"claripy.backends":{backend_concrete:[2,0,0,"-"],backend_z3:[2,0,0,"-"],backend_z3_parallel:[2,0,0,"-"],backendremote:[2,0,0,"-"],celeryconfig:[2,0,0,"-"]},"claripy.balancer":{Balancer:[2,1,1,""]},"claripy.frontends":{caching_frontend:[2,0,0,"-"],composite_frontend:[2,0,0,"-"],constrained_frontend:[2,0,0,"-"],full_frontend:[2,0,0,"-"],hybrid_frontend:[2,0,0,"-"],light_frontend:[2,0,0,"-"],replacement_frontend:[2,0,0,"-"]},"claripy.vsa":{abstract_location:[2,0,0,"-"],bool_result:[2,0,0,"-"],discrete_strided_interval_set:[2,0,0,"-"],errors:[2,0,0,"-"],strided_interval:[2,0,0,"-"],valueset:[2,0,0,"-"]},"claripy.vsa.discrete_strided_interval_set":{DiscreteStridedIntervalSet:[2,1,1,""]},"claripy.vsa.discrete_strided_interval_set.DiscreteStridedIntervalSet":{cardinality:[2,2,1,""],collapse:[2,3,1,""],concat:[2,3,1,""],extract:[2,3,1,""],normalize:[2,3,1,""],sign_extend:[2,3,1,""],widen:[2,3,1,""],zero_extend:[2,3,1,""]},"claripy.vsa.strided_interval":{CreateStridedInterval:[2,4,1,""],StridedInterval:[2,1,1,""],WarrenMethods:[2,1,1,""]},"claripy.vsa.strided_interval.StridedInterval":{LShR:[2,3,1,""],SGE:[2,3,1,""],SGT:[2,3,1,""],SLE:[2,3,1,""],SLT:[2,3,1,""],UGE:[2,3,1,""],UGT:[2,3,1,""],ULE:[2,3,1,""],ULT:[2,3,1,""],add:[2,3,1,""],bitwise_and:[2,3,1,""],bitwise_or:[2,3,1,""],bitwise_xor:[2,3,1,""],complement:[2,2,1,""],diop_natural_solution_linear:[2,5,1,""],eq:[2,3,1,""],eval:[2,3,1,""],extended_euclid:[2,5,1,""],gcd:[2,5,1,""],identical:[2,3,1,""],igcd:[2,5,1,""],is_bottom:[2,2,1,""],is_empty:[2,2,1,""],is_integer:[2,2,1,""],is_top:[2,2,1,""],lcm:[2,5,1,""],least_upper_bound:[2,5,1,""],lower:[2,5,1,""],mul:[2,3,1,""],pseudo_join:[2,5,1,""],reverse:[2,3,1,""],sdiv:[2,3,1,""],sub:[2,3,1,""],top:[2,5,1,""],udiv:[2,3,1,""],union:[2,3,1,""],upper:[2,5,1,""]},"claripy.vsa.strided_interval.WarrenMethods":{max_and:[2,5,1,""],max_or:[2,5,1,""],max_xor:[2,5,1,""],min_and:[2,5,1,""],min_or:[2,5,1,""],min_xor:[2,5,1,""]},"cle.backends":{Backend:[3,1,1,""],Region:[3,1,1,""],Section:[3,1,1,""],Segment:[3,1,1,""],Symbol:[3,1,1,""],backedcgc:[3,0,0,"-"],blob:[3,0,0,"-"],cgc:[3,0,0,"-"],elf:[3,0,0,"-"],elfcore:[3,0,0,"-"],idabin:[3,0,0,"-"],metaelf:[3,0,0,"-"],pe:[3,0,0,"-"]},"cle.backends.Backend":{contains_addr:[3,3,1,""],find_section_containing:[3,3,1,""],find_segment_containing:[3,3,1,""],get_finalizers:[3,3,1,""],get_initializers:[3,3,1,""],get_max_addr:[3,3,1,""],get_min_addr:[3,3,1,""],get_symbol:[3,3,1,""],set_got_entry:[3,3,1,""]},"cle.backends.Region":{addr_to_offset:[3,3,1,""],contains_addr:[3,3,1,""],contains_offset:[3,3,1,""],max_addr:[3,2,1,""],max_offset:[3,2,1,""],min_addr:[3,2,1,""],min_offset:[3,3,1,""],offset_to_addr:[3,3,1,""]},"cle.backends.Section":{is_executable:[3,2,1,""],is_readable:[3,2,1,""],is_writable:[3,2,1,""]},"cle.backends.Symbol":{demangled_name:[3,2,1,""],is_export:[3,2,1,""],is_function:[3,2,1,""],is_import:[3,2,1,""],is_weak:[3,2,1,""],rebased_addr:[3,2,1,""]},"cle.backends.backedcgc":{BackedCGC:[3,1,1,""]},"cle.backends.blob":{Blob:[3,1,1,""]},"cle.backends.blob.Blob":{function_name:[3,3,1,""],in_which_segment:[3,3,1,""]},"cle.backends.cgc":{CGC:[3,1,1,""]},"cle.backends.elf":{ELF:[3,1,1,""],ELFSymbol:[3,1,1,""]},"cle.backends.elf.ELF":{get_symbol:[3,3,1,""]},"cle.backends.elfcore":{CoreNote:[3,1,1,""],ELFCore:[3,1,1,""]},"cle.backends.idabin":{IDABin:[3,1,1,""]},"cle.backends.idabin.IDABin":{function_name:[3,3,1,""],get_max_addr:[3,3,1,""],get_min_addr:[3,3,1,""],get_strings:[3,3,1,""],get_symbol_addr:[3,3,1,""],in_which_segment:[3,3,1,""],is_thumb:[3,3,1,""],resolve_import_dirty:[3,3,1,""],set_got_entry:[3,3,1,""]},"cle.backends.metaelf":{MetaELF:[3,1,1,""]},"cle.backends.metaelf.MetaELF":{get_call_stub_addr:[3,3,1,""],is_ppc64_abiv1:[3,2,1,""],plt:[3,2,1,""],reverse_plt:[3,2,1,""]},"cle.backends.pe":{PE:[3,1,1,""]},"cle.errors":{CLECompatibilityError:[3,6,1,""],CLEError:[3,6,1,""],CLEFileNotFoundError:[3,6,1,""],CLEInvalidBinaryError:[3,6,1,""],CLEOperationError:[3,6,1,""],CLEUnknownFormatError:[3,6,1,""]},"cle.loader":{Loader:[3,1,1,""]},"cle.loader.Loader":{add_object:[3,3,1,""],find_module_name:[3,3,1,""],find_plt_stub_name:[3,3,1,""],find_symbol_got_entry:[3,3,1,""],find_symbol_name:[3,3,1,""],get_finalizers:[3,3,1,""],get_initializers:[3,3,1,""],identify_object:[3,5,1,""],load_object:[3,5,1,""],max_addr:[3,3,1,""],min_addr:[3,3,1,""],relocate:[3,3,1,""],whats_at:[3,3,1,""]},"cle.memory":{Clemory:[3,1,1,""]},"cle.memory.Clemory":{add_backer:[3,3,1,""],cbackers:[3,2,1,""],read:[3,3,1,""],read_addr_at:[3,3,1,""],read_bytes:[3,3,1,""],read_bytes_c:[3,3,1,""],seek:[3,3,1,""],stride_repr:[3,2,1,""],write_addr_at:[3,3,1,""],write_bytes:[3,3,1,""],write_bytes_to_backer:[3,3,1,""]},"cle.relocations":{Relocation:[3,1,1,""]},"cle.relocations.Relocation":{relocate:[3,3,1,""]},"cle.tls":{TLSArchInfo:[3,1,1,""],TLSObj:[3,1,1,""]},"cle.tls.TLSArchInfo":{dtv_offsets:[3,2,1,""],head_offsets:[3,2,1,""],pthread_offsets:[3,2,1,""],tcbhead_size:[3,2,1,""],variant:[3,2,1,""]},"cle.tls.TLSObj":{get_addr:[3,3,1,""]},"pyvex.block":{IRSB:[5,1,1,""],IRTypeEnv:[5,1,1,""]},"pyvex.block.IRSB":{all_constants:[5,2,1,""],constant_jump_targets:[5,2,1,""],constants:[5,2,1,""],expressions:[5,2,1,""],instructions:[5,2,1,""],operations:[5,2,1,""],pp:[5,3,1,""],size:[5,2,1,""]},"pyvex.enums":{IRCallee:[5,1,1,""],IRRegArray:[5,1,1,""],VEXObject:[5,1,1,""]},"pyvex.expr":{Binder:[5,1,1,""],Binop:[5,1,1,""],CCall:[5,1,1,""],Const:[5,1,1,""],Get:[5,1,1,""],GetI:[5,1,1,""],IRExpr:[5,1,1,""],ITE:[5,1,1,""],Load:[5,1,1,""],Qop:[5,1,1,""],RdTmp:[5,1,1,""],Triop:[5,1,1,""],Unop:[5,1,1,""]},"pyvex.expr.IRExpr":{child_expressions:[5,2,1,""],constants:[5,2,1,""]},"pyvex.stmt":{AbiHint:[5,1,1,""],CAS:[5,1,1,""],Exit:[5,1,1,""],IMark:[5,1,1,""],IRStmt:[5,1,1,""],LLSC:[5,1,1,""],LoadG:[5,1,1,""],NoOp:[5,1,1,""],Put:[5,1,1,""],PutI:[5,1,1,""],Store:[5,1,1,""],StoreG:[5,1,1,""],WrTmp:[5,1,1,""]},"simuvex.plugins":{abstract_memory:[6,0,0,"-"],cgc:[6,0,0,"-"],gdb:[6,0,0,"-"],inspect:[6,0,0,"-"],libc:[6,0,0,"-"],posix:[6,0,0,"-"],solver:[6,0,0,"-"]},"simuvex.plugins.abstract_memory":{SimAbstractMemory:[6,1,1,""]},"simuvex.plugins.abstract_memory.SimAbstractMemory":{copy:[6,3,1,""],dbg_print:[6,3,1,""],get_segments:[6,3,1,""],merge:[6,3,1,""],normalize_address:[6,3,1,""],set_state:[6,3,1,""]},"simuvex.plugins.cgc":{SimStateCGC:[6,1,1,""]},"simuvex.plugins.gdb":{GDB:[6,1,1,""]},"simuvex.plugins.gdb.GDB":{set_data:[6,3,1,""],set_heap:[6,3,1,""],set_regs:[6,3,1,""],set_stack:[6,3,1,""]},"simuvex.plugins.inspect":{BP:[6,1,1,""],SimInspector:[6,1,1,""]},"simuvex.plugins.inspect.BP":{check:[6,3,1,""],fire:[6,3,1,""]},"simuvex.plugins.inspect.SimInspector":{action:[6,3,1,""],add_breakpoint:[6,3,1,""],b:[6,3,1,""],downsize:[6,3,1,""],make_breakpoint:[6,3,1,""],remove_breakpoint:[6,3,1,""]},"simuvex.plugins.libc":{SimStateLibc:[6,1,1,""]},"simuvex.plugins.posix":{Stat:[6,1,1,""]},"simuvex.plugins.posix.Stat":{st_atime:[6,2,1,""],st_atimensec:[6,2,1,""],st_blksize:[6,2,1,""],st_blocks:[6,2,1,""],st_ctime:[6,2,1,""],st_ctimensec:[6,2,1,""],st_dev:[6,2,1,""],st_gid:[6,2,1,""],st_ino:[6,2,1,""],st_mode:[6,2,1,""],st_mtime:[6,2,1,""],st_mtimensec:[6,2,1,""],st_nlink:[6,2,1,""],st_rdev:[6,2,1,""],st_size:[6,2,1,""],st_uid:[6,2,1,""]},"simuvex.plugins.solver":{SimSolver:[6,1,1,""]},"simuvex.plugins.solver.SimSolver":{BVS:[6,3,1,""]},"simuvex.s_action":{SimAction:[6,1,1,""],SimActionConstraint:[6,1,1,""],SimActionData:[6,1,1,""],SimActionExit:[6,1,1,""]},"simuvex.s_action.SimAction":{downsize:[6,3,1,""]},"simuvex.s_action_object":{SimActionObject:[6,1,1,""]},"simuvex.s_cc":{SimCC:[6,1,1,""],SimCCUnknown:[6,1,1,""]},"simuvex.s_cc.SimCC":{arg:[6,3,1,""],arg_getter:[6,3,1,""],set_args:[6,3,1,""],set_return_expr:[6,3,1,""],stack_space:[6,3,1,""]},"simuvex.s_format":{FormatParser:[6,1,1,""],FormatSpecifier:[6,1,1,""],FormatString:[6,1,1,""]},"simuvex.s_format.FormatString":{interpret:[6,3,1,""],replace:[6,3,1,""]},"simuvex.s_slicer":{SimSlicer:[6,1,1,""]},"simuvex.s_state":{SimState:[6,1,1,""]},"simuvex.s_state.SimState":{copy:[6,3,1,""],dbg_print_stack:[6,3,1,""],ip:[6,2,1,""],mem_concrete:[6,3,1,""],merge:[6,3,1,""],reg_concrete:[6,3,1,""],stack_pop:[6,3,1,""],stack_push:[6,3,1,""],stack_read:[6,3,1,""],widen:[6,3,1,""]},"simuvex.s_type":{SimType:[6,1,1,""],SimTypeArray:[6,1,1,""],SimTypeBottom:[6,1,1,""],SimTypeChar:[6,1,1,""],SimTypeFd:[6,1,1,""],SimTypeFixedSizeArray:[6,1,1,""],SimTypeFunction:[6,1,1,""],SimTypeInt:[6,1,1,""],SimTypeLength:[6,1,1,""],SimTypePointer:[6,1,1,""],SimTypeReg:[6,1,1,""],SimTypeString:[6,1,1,""],SimTypeTop:[6,1,1,""]},"simuvex.s_variable":{SimVariableSet:[6,1,1,""]},"simuvex.s_variable.SimVariableSet":{complement:[6,3,1,""]},"simuvex.storage":{file:[6,0,0,"-"],memory:[6,0,0,"-"],memory_object:[6,0,0,"-"],paged_memory:[6,0,0,"-"]},"simuvex.storage.file":{SimDialogue:[6,1,1,""],SimFile:[6,1,1,""]},"simuvex.storage.file.SimDialogue":{add_dialogue_entry:[6,3,1,""],read:[6,3,1,""]},"simuvex.storage.file.SimFile":{merge:[6,3,1,""],read:[6,3,1,""],variables:[6,3,1,""]},"simuvex.storage.memory":{AddressWrapper:[6,1,1,""],MemoryStoreRequest:[6,1,1,""],RegionDescriptor:[6,1,1,""],RegionMap:[6,1,1,""],SimMemory:[6,1,1,""]},"simuvex.storage.memory.AddressWrapper":{to_valueset:[6,3,1,""]},"simuvex.storage.memory.RegionMap":{absolutize:[6,3,1,""],map:[6,3,1,""],relativize:[6,3,1,""],unmap_by_address:[6,3,1,""]},"simuvex.storage.memory.SimMemory":{category:[6,2,1,""],copy_contents:[6,3,1,""],find:[6,3,1,""],load:[6,3,1,""],normalize_address:[6,3,1,""],store:[6,3,1,""],store_cases:[6,3,1,""]},"simuvex.storage.memory_object":{SimMemoryObject:[6,1,1,""]},"simuvex.storage.paged_memory":{Page:[6,1,1,""],SimPagedMemory:[6,1,1,""]},"simuvex.storage.paged_memory.SimPagedMemory":{addrs_for_hash:[6,3,1,""],addrs_for_name:[6,3,1,""],changed_bytes:[6,3,1,""],memory_objects_for_hash:[6,3,1,""],memory_objects_for_name:[6,3,1,""],permissions:[6,3,1,""],replace_all:[6,3,1,""],replace_memory_object:[6,3,1,""],store_memory_object:[6,3,1,""]},"simuvex.vex":{size_bits:[6,4,1,""],size_bytes:[6,4,1,""]},archinfo:{arch:[1,0,0,"-"],arch_aarch64:[1,0,0,"-"],arch_amd64:[1,0,0,"-"],arch_arm:[1,0,0,"-"],arch_mips32:[1,0,0,"-"],arch_mips64:[1,0,0,"-"],arch_ppc32:[1,0,0,"-"],arch_ppc64:[1,0,0,"-"],arch_x86:[1,0,0,"-"]},claripy:{ast:[2,0,0,"-"],backend:[2,0,0,"-"],backend_manager:[2,0,0,"-"],backend_object:[2,0,0,"-"],backends:[2,0,0,"-"],balancer:[2,0,0,"-"],bv:[2,0,0,"-"],errors:[2,0,0,"-"],fp:[2,0,0,"-"],frontend:[2,0,0,"-"],frontends:[2,0,0,"-"],operations:[2,0,0,"-"],ops:[2,0,0,"-"],replacer:[2,0,0,"-"],result:[2,0,0,"-"],vsa:[2,0,0,"-"]},cle:{backends:[3,0,0,"-"],errors:[3,0,0,"-"],loader:[3,0,0,"-"],memory:[3,0,0,"-"],relocations:[3,0,0,"-"],tls:[3,0,0,"-"]},pyvex:{"const":[5,0,0,"-"],block:[5,0,0,"-"],enums:[5,0,0,"-"],errors:[5,0,0,"-"],expr:[5,0,0,"-"],set_iropt_level:[5,4,1,""],stmt:[5,0,0,"-"]},simuvex:{plugins:[6,0,0,"-"],procedures:[6,0,0,"-"],s_action:[6,0,0,"-"],s_action_object:[6,0,0,"-"],s_cc:[6,0,0,"-"],s_event:[6,0,0,"-"],s_format:[6,0,0,"-"],s_options:[6,0,0,"-"],s_pcap:[6,0,0,"-"],s_procedure:[6,0,0,"-"],s_run:[6,0,0,"-"],s_slicer:[6,0,0,"-"],s_state:[6,0,0,"-"],s_type:[6,0,0,"-"],s_variable:[6,0,0,"-"],storage:[6,0,0,"-"],vex:[6,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"],"4":["py","function","Python function"],"5":["py","staticmethod","Python static method"],"6":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:method","4":"py:function","5":"py:staticmethod","6":"py:exception"},terms:{"0x40414243":2,"0x41":6,"0x41424344":2,"32bit":6,"8bit":6,"__add__":2,"__tls_get_addr":3,"_abcol":6,"_convert":2,"_final":2,"_func":2,"_inspect":6,"_revers":2,"_updat":3,"abstract":[3,6],"boolean":[2,6],"byte":[1,3,5,6],"case":[2,6],"class":[1,2,3,5,6],"const":5,"default":[2,5,6],"enum":[3,5],"export":3,"final":[2,3,6],"float":2,"function":[2,3,5,6],"import":[2,3],"int":[1,3,5,6],"new":[2,3,6],"null":5,"public":2,"return":[1,2,3,5,6],"short":6,"static":[2,3,4,5,6],"super":[5,6],"throw":3,"true":[2,3,6],"try":[2,3],"void":6,"while":[2,3,6],abi:5,abihint:5,abiv1:3,abl:[2,5],about:[2,5],abov:2,absolut:6,absolute_address:6,abstract_back:6,abstract_memori:6,abstractloc:6,access:[3,6],accord:2,across:3,action:6,actual:[2,3,6],add:[2,3,6],add_back:3,add_breakpoint:6,add_constraint:6,add_dialogue_entri:6,add_object:3,add_opt:6,addend:3,addit:6,addr:[3,6],addr_to_offset:3,address:[3,5,6],addresswrapp:6,addrs_for_hash:6,addrs_for_nam:6,adjust:6,adjust_stack:6,after:6,agnost:2,agost:2,alia:[3,6],align:3,all:[2,3,5,6],all_const:5,all_object:3,alloc:[2,3,6],allow:[2,3,6],alreadi:[2,3],also:2,altern:3,alwai:2,amd64:6,among:5,amount:[2,3],ana:[2,6],analys:[2,4],analyz:6,ani:[2,3,5,6],anoth:[2,3,6],anyth:2,api:[],append:[2,6],appli:[3,6],applic:3,appropri:3,approxim:2,arbitrari:6,architectur:[1,3,4,5,6],area:6,arg:[2,3,6],arg_gett:6,args_mem_bas:6,argument:[2,3,5,6],arithmet:2,arm:3,arr:5,arrai:[3,5,6],assert:2,assign:[3,5],assist:2,associ:[2,6],assumpt:6,atom:5,attempt:2,attemt:3,attr0:6,attr1:6,attribut:[3,6],augment:2,author:2,auto_load_lib:3,autodetect:3,automat:3,avail:6,avoid:6,awai:2,backedcgc:3,backend_object:2,backendconcret:2,backenderror:2,backendobject:2,backendvsa:2,backendz3:2,backer:[3,6],balanc:2,base_add:3,base_addr:3,base_address:6,basi:3,basic:[2,3,5,6],batch_ev:2,been:[2,3,6],befor:[3,6],begin:[2,3,6],begin_addr:6,behavior:2,belong:6,better:2,between:[2,6],beyond:6,big:2,bin:2,binari:[2,3,4,5,6],bind:[3,5],binder:5,binop:5,bit:[1,2,6],bitvector:[2,6],bitwise_and:2,bitwise_or:2,bitwise_xor:2,blob:3,block:5,book:2,bool:[2,3,5,6],bore:5,bottom:2,bound:2,branch:5,breakpoint:6,buffer:[3,5,6],burrow:2,bvv:[2,6],bytes_offset:5,c_expr:5,c_stmt:5,cach:2,calcul:[2,6],call:[1,2,3,5,6],calle:5,came:3,can:[2,3,5,6],cancel:6,cannot:6,capabl:4,cardin:2,carri:6,categori:6,caus:6,cback:3,cbacker:3,ccall:5,cdata:5,certain:6,cffi:[3,5],cgc:[3,6],cgc_executable_format:3,challeng:3,chang:[3,6],changed_byt:6,charact:6,check:[2,5,6],checkpoint:6,child_express:5,clear:[2,6],clecompatibilityerror:3,cleerror:3,clefilenotfounderror:3,cleinvalidbinaryerror:3,clemori:3,cleoperationerror:3,cleunknownformaterror:3,close:6,closest:6,code:[2,3,5],collaps:2,collect:[1,6],com:3,combin:2,come:2,command:6,common:2,compar:[2,5],comparison:2,compat:3,compatiable_with:3,compatibil:3,compatible_with:3,competit:3,complement:[2,6],compon:[2,6],comput:2,concat:2,concaten:2,concept:3,concern:3,concret:[2,6],condit:[5,6],conserv:2,consid:[2,3],constant:[2,5],constant_jump_target:5,constrain:2,constraint:[2,6],constraint_to_si:2,construct:[2,5],constructor:[3,6],contain:[1,2,3,5,6],contains_addr:3,contains_offset:3,content:[3,6],contract:2,control:5,convent:6,convert:[2,3,6],convert_to_valueset:6,copi:6,copy_cont:6,core:[2,3],corenot:3,correspond:[2,3],corrupt:[3,6],could:6,count:[2,6],counter:5,cours:[2,6],creat:[2,3,6],createstridedinterv:2,cross:1,current:[3,6],current_allocation_bas:3,custom:2,custom_arch:3,custom_base_addr:3,custom_entry_point:3,custom_ld_path:3,custom_offset:3,cyber:3,cybergrandchalleng:3,data:[3,5,6],data_dump:6,dbg_print:6,dbg_print_stack:6,deal:[2,3],debug:[5,6],decis:6,deep:2,defin:[1,3],definit:2,delai:2,delight:2,demangl:3,demangled_nam:3,demark:3,denot:6,dep:3,depend:[2,3,5,6],depth:[2,6],derefer:2,deriv:2,desc:3,describ:[2,5,6],descriptor:6,design:3,destin:[3,6],detail:[2,6],determin:[3,6],dialogu:6,dialogue_entri:6,dialogue_len:6,dict:[3,6],dictionari:[2,3],did:2,differ:[2,3,6],diop_natural_solution_linear:2,diophantin:2,diophatin:2,direct:5,direct_next:5,directli:[2,3,6],dirti:3,discard:6,discret:2,discrete_strided_interval_set:2,discretestridedintervalset:2,distinguish:2,divis:2,divisor:2,document:3,doe:[2,3,6],don:[2,3,6],done:[2,5],downsiz:[2,6],draft:2,draw:2,dsi:2,dst:6,dst_addr:6,dst_memori:6,dtv_offset:3,dump:6,dure:6,dynam:[3,4],dynsym:3,each:[2,3,5,6],eager:2,eager_backend:2,ean:2,easili:2,effect:[5,6],effici:3,eip:3,either:[2,3,5,6],elem_typ:6,element:[2,5,6],elemti:5,elf:3,elfcor:3,elfsymbol:3,els:[5,6],empti:[2,6],emul:[1,6],enabl:[2,6],encount:3,end:[1,2,3,5,6],end_addr:6,endian:6,enough:3,ensur:[2,6],entir:6,entri:[3,5,6],environ:5,equal:[2,6],equat:2,equival:[2,3],error:[2,3,6],etc:[2,4,5,6],eval:2,evalu:[2,5,6],even:[3,6],event:6,event_typ:6,exact:2,exactli:[2,5],exampl:[2,3,6],excav:2,except:[2,3,6],except_missing_lib:3,exclud:5,execstack:3,execut:[2,3,4,6],exist:[2,3,6],exit:[3,5,6],exit_typ:6,expect:2,explicit_nam:[2,6],expos:2,expr:[2,5,6],express:[2,5,6],extend:2,extended_euclid:2,extern:3,extra:[2,6],extra_constraint:2,extract:[2,3],fact:[2,3],fail:3,fall:2,fallback:6,fals:[2,3,6],falseresult:2,far:2,fast:[2,6],feel:2,fell:6,few:6,ffi:5,field:[3,6],file:[3,5,6],filenam:3,files:3,filetyp:3,fill:6,filt:3,find:[2,3,6],find_module_nam:3,find_plt_stub_nam:3,find_section_contain:3,find_segment_contain:3,find_symbol_got_entri:3,find_symbol_nam:3,fire:6,first:[2,3],fist:2,fix:[3,5,6],flag:[2,3,6],flag_valu:6,flat:3,flatten:3,flexibl:6,follow:[2,3,5,6],forc:3,force_load_lib:3,form:[2,6],format:[2,3,6],formatpars:6,formatspecifi:6,formatstr:6,forth:6,found:[2,3,6],fpv:2,frame:6,free:2,from:[2,3,5,6],func:[2,6],function_address:6,function_nam:3,gcd:2,gdb:[3,6],gdb_fix:3,gdb_map:3,gener:[2,3,6],generic_model:2,get:[2,3,5,6],get_addr:3,get_call_stub_addr:3,get_fin:3,get_initi:3,get_max_addr:3,get_min_addr:3,get_seg:6,get_str:3,get_symbol:3,get_symbol_addr:3,geti:5,girlscout:3,github:3,give:[2,3],given:[2,3,6],global:3,got:3,grand:3,greater:2,greatest:2,guard:5,guest:5,gui:6,hacker:2,hand:6,handl:[2,6],happen:[2,6],hard:2,has_fals:2,has_tru:2,hash:[2,6],hash_map:6,have:[2,3,6],head_offset:3,heap:[3,6],heap_bas:6,heap_dump:6,held:5,helper:[2,5,6],here:[3,6],high_bit:2,highest:[2,3],hint:[2,5],hold:3,how:[2,3],http:3,huge:3,ida:3,idabin:3,idea:2,ident:2,identifi:[2,3,6],identify_object:3,idiom:2,igcd:2,ignore_import_version_numb:3,imark:5,implement:[2,3,6],implementor:6,improv:2,in_which_seg:3,includ:[5,6],increment:5,independ:3,index:[3,4,5,6],indic:3,indirect:5,inequ:2,inform:[1,3,5,6],initi:[2,3,6],inlin:3,insid:6,inslice_callback:6,inslice_callback_infodict:6,inspect:6,instal:3,instanc:[2,3,6],instanti:6,instead:[3,6],instruct:[5,6],int_bit:1,integ:[2,3,6],interfac:[2,3,5],intermedi:5,intern:[2,6],interpret:6,interv:2,intervals_to_join:2,introduc:2,invalid:3,invert:2,ircalle:5,irconst:5,irel:3,irexpr:5,irregarrai:5,irsb:[5,6],irstmt:5,irtypeenv:5,is_bottom:2,is_empti:2,is_execut:3,is_export:3,is_fals:2,is_funct:3,is_import:3,is_integ:2,is_main_bin:3,is_on_stack:6,is_ppc64_abiv1:3,is_read:3,is_stack:6,is_thumb:3,is_top:2,is_tru:2,is_weak:3,is_writ:[3,6],isn:2,isol:2,ite_burrow:2,ite_excav:2,item:3,itself:[2,3],iver:3,jmprel:3,join:2,jorg:2,jump:[3,5,6],jumpkind:5,just:[2,6],keep:[2,6],kei:3,keyword:3,klee:4,know:2,known:[2,6],kwarg:[2,3,6],label:6,larg:[3,6],last:2,later:6,lazi:2,lcm:2,least:[2,6],least_upper_bound:2,leav:[2,6],length:[2,5,6],length_spec:6,less:2,let:2,level:[2,5,6],lexicograph:2,lib_opt:3,libc:[3,6],libcgcef:3,librari:3,libvex:5,lift:5,lightweight:6,like:[2,3,4,6],likewis:2,line:2,linear:2,link:[3,5],list:[2,3,5,6],liter:6,llsc:5,load_object:3,loader:3,loadg:5,local:3,locat:6,logic:2,look:[3,6],lookup:3,loop:5,loudli:3,low:[2,6],low_bit:2,lower:[2,6],lower_bound:2,lower_bund:2,lowest:[2,3],lshr:2,lvl:5,mach:3,machin:5,made:3,mai:2,main:3,main_bin:3,main_binari:3,main_opt:3,make:[2,3,5,6],make_breakpoint:6,make_uuid:2,manag:2,mani:[3,6],map:[3,6],mark:[3,5],master:3,match:[5,6],max:[2,3,5,6],max_addr:3,max_and:2,max_offset:3,max_or:2,max_search:6,max_symbolic_byt:6,max_valu:2,max_xor:2,maximum:[2,3,5,6],mayberesult:2,mayhem:4,mean:2,meant:[3,6],measur:2,mem:6,mem_addr:5,mem_concret:6,memori:[2,3,5,6],memory_back:[3,6],memory_id:6,memory_object:6,memory_objects_for_hash:6,memory_objects_for_nam:6,memoryobjectref:6,memoryregion:6,memorystorerequest:6,memsiz:3,merg:6,merge_flag:6,meta:6,metaelf:3,method:[2,3,6],middl:5,might:2,min:[2,3,6],min_addr:3,min_and:2,min_offset:3,min_or:2,min_valu:2,min_xor:2,minimum:[2,3,6],mode:[2,3,6],model:[2,6],modifi:6,modul:[3,4,6],module_id:3,more:[2,3,6],most:[2,6],mostli:[2,6],move:2,mul:2,multi:4,multipl:[2,5,6],must:[2,3,6],mutableset:6,n_type:3,name:[1,2,3,5,6],name_map:6,nativ:2,natur:2,nava:2,nbyte:3,necessarili:6,need:[2,3,6],nelem:5,never:[2,3],new_arg:2,new_attr0:6,new_attr1:6,new_cont:6,new_length:2,new_val:3,newaddr:3,newli:6,next:[2,3,5],non:[5,6],none:[2,3,5,6],noop:5,normal:[2,6],normalize_address:6,notat:3,note:[2,3,5,6],nth:6,nul:6,num_byt:5,num_inst:5,number:[2,3,5,6],obj:3,object:[1,2,3,5,6],obtain:2,occur:6,offset:[3,5,6],offset_to_addr:3,offsip:5,ohter:2,old:[2,6],omit_fp:6,omit_frame_point:6,onc:5,onli:[2,3,5,6],oper:[2,3,5],operand:2,optim:[2,5,6],option:[3,5,6],order:[2,3,6],origin:2,originali:3,other:[2,3,5,6],otherwis:[2,3,6],ought:3,out:[2,3,6],output:[3,6],outsid:[2,5],outstand:2,over:2,overflow:6,overrid:[2,3,6],overridden:3,overwrit:6,overwritten:6,own:3,owner:3,owner_obj:3,page:[4,6],page_s:6,paged_memori:6,paper:[2,6],param:[2,5,6],paramet:[2,3,5,6],pars:3,parser:6,part:3,partial:6,pass:[2,6],path_new:2,pattern:5,per:3,perform:[2,3,4,5,6],permiss:[3,6],permissions_back:6,permissions_map:3,pic:3,pick:3,piec:6,place:6,platform:[4,5],pleas:2,plt:3,plugin:[],point:[2,3,6],pointer:[3,5,6],pop:6,posit:[3,6],posix:6,possibl:[2,6],powerpc64:3,precis:2,prefix:3,present:2,pretti:5,previou:[2,6],previous:6,primari:5,print:[2,5,6],privat:2,problem:3,proc:3,procedur:[],process:[2,3,6],produc:6,program:[2,3,5,6],proof:2,properti:[2,3],propos:2,provid:[2,3,5,6],pseudo:2,pseudo_join:2,pthread_offset:3,pts_to:6,pure:5,purpos:[3,6],push:[2,6],put:5,puti:5,pyreadelf:3,python:[2,5],pyvex:1,qop:5,quaternari:5,quotient:2,rais:[2,3,6],rang:6,raw:6,rax:2,rax_new:2,rax_start:2,rdtmp:5,reach:3,read:[3,5,6],read_addr_at:3,read_byt:3,read_bytes_c:3,real:3,realist:2,realli:[2,3],reason:2,rebal:2,rebas:3,rebase_addr:3,rebase_granular:3,rebased_addr:3,receiv:2,recommend:6,redistributor:2,refer:[2,3,6],reg:[2,6],reg_concret:6,reg_dep:6,reg_offset:6,regardless:3,region:[3,6],region_id:6,region_typ:6,regiondescriptor:6,regionmap:6,regist:[3,5,6],register_back:3,regs_dump:6,reject:5,rel:6,relat:6,related_function_address:6,relativ:6,relative_address:6,relev:2,reli:6,reloc:3,remov:6,remove_breakpoint:6,remove_opt:6,repeatedli:3,repes:6,replac:[2,3,6],replace_al:6,replace_dict:2,replace_memory_object:6,repres:[1,2,3,5,6],represent:[2,3,5],reproduct:2,request:[3,6],requested_bas:3,requested_object:3,requir:[2,3,5],resolv:[2,3,6],resolve_import_dirti:3,resolve_import_with:3,resolved_import:3,resolvedbi:3,respect:3,respons:1,result:[2,3,5,6],ret_to:6,ret_val:6,retriev:2,returnti:6,revers:2,reverse_plt:3,right:2,risk:3,root:[2,3],rotat:5,rotateleft:2,rtype:2,rule:5,run:[3,5,6],run_func_nam:6,rwx:6,s_action:6,s_action_object:6,s_cc:6,s_event:6,s_format:6,s_procedur:6,s_slicer:6,s_state:6,s_type:6,s_variabl:6,safe:3,sai:2,same:[2,6],saniti:5,satisfi:2,save:[2,6],sdiv:2,search:[3,4,6],second:[2,3],section:[2,3,5],sections_map:3,see:[2,3,6],seek:3,seen:5,segment:[3,6],self:[2,3,6],semant:6,sens:2,separ:3,sequenc:2,seri:[3,6],serial:2,session:6,set:[2,3,5,6],set_arg:6,set_data:6,set_got_entri:3,set_heap:6,set_iropt_level:5,set_reg:6,set_return_expr:6,set_stack:6,set_stack_address_map:6,set_stat:6,sever:6,sge:2,sgt:2,sh_info:3,share:3,shared_object:3,sharedlibrari:3,shift:2,shift_amount:2,should:[2,3,5,6],should_collaps:2,si_set:2,side:[2,5],sign:[2,6],sign_extend:2,signed:2,signext:2,signextend:2,sim_kwarg:6,simabstractmemori:6,simact:6,simactionconstraint:6,simactiondata:6,simactionexit:6,simactionobject:6,simcc:6,simccunknown:6,simdialogu:6,simev:6,simfil:6,siminspect:6,siminspector:6,simmemori:6,simmemoryobject:6,simpagedmemori:6,simpl:[2,3],simpler:2,simpli:6,simplifi:2,simprocedur:[3,6],simslic:6,simsolv:6,simstat:6,simstatecgc:6,simstatelibc:6,simstateplugin:6,simsymbolicmemori:6,simtyp:6,simtypearrai:6,simtypebottom:6,simtypechar:6,simtypefd:6,simtypefixedsizearrai:6,simtypefunct:6,simtypeint:6,simtypelength:6,simtypepoint:6,simtypereg:6,simtypestr:6,simtypetop:6,simuvex:[],simvalueerror:6,simvari:6,simvariableset:6,sinc:3,singl:[3,5,6],sinkhol:6,size:[1,2,3,5,6],size_bit:6,size_byt:6,skip:3,skip_lib:3,sle:2,slice:6,slot:3,slow:2,slt:2,smart:[2,3],smart_join:2,solist:3,solut:2,solv:2,solver_requir:2,some:[2,3,6],somebodi:3,someth:[2,6],soon:2,sort:2,sound:2,sourc:6,sp_delta:6,space:[3,6],special_memory_fil:6,specif:[1,2,3,5,6],specifi:[2,3,6],speedup:6,split:2,split_on:2,src:6,src_memori:6,ssa:5,st_atim:6,st_atimensec:6,st_blksize:6,st_block:6,st_ctime:6,st_ctimensec:6,st_dev:6,st_gid:6,st_ino:6,st_mode:6,st_mtime:6,st_mtimensec:6,st_nlink:6,st_rdev:6,st_size:6,st_uid:6,stack:[3,6],stack_dump:6,stack_pop:6,stack_push:6,stack_read:6,stack_spac:6,stack_top:6,stackarg_mem_bas:6,stand:5,standard:1,start:[3,5,6],startpo:6,stat:6,state:[2,3,5,6],statement:[5,6],stdout:5,step:2,still:2,stmt:5,stmt_from:6,stmts_use:5,storabl:[2,6],storag:3,store:[3,5,6],store_cas:6,store_memory_object:6,storedata:5,storeg:5,str:[3,5],strategi:6,stream:3,strict:2,stride:[2,6],stride_repr:3,strided_interv:2,stridedinterv:[2,6],string:[2,3,5,6],structur:2,structurally_match:2,stub:[2,3],stuff:[2,6],style:6,sub:2,subclass:3,succes:3,successfulli:3,suggest:2,support:[2,3],suppos:6,sure:3,swap:[2,5],swap_arg:2,swoop:6,sym:3,sym_typ:3,sym_val:2,symb:3,symbol:[2,3,4,6],symbol_nam:3,symbol_t:3,symbols_by_addr:3,symid:3,sympi:2,syscal:5,system:3,take:[2,6],taken:2,target:[5,6],target_reg:6,target_region:6,target_region_id:6,target_tmp:6,tcbhead_siz:3,tell:3,temporari:5,term:[2,3],termin:6,ternari:5,test:2,text:3,than:[2,3,6],thank:2,thei:[2,3,6],them:[2,3,6],themselv:2,therefor:[2,6],thi:[1,2,3,5,6],thing:[1,5,6],those:[2,5,6],though:2,thread:3,three:[2,6],through:[2,3,6],thu:2,thumb:3,tie:2,time:[2,5],timeout:2,tls_module_id:3,tls_object:3,tlsarchinfo:3,tlsobj:3,tmp:[5,6],tmp_dep:6,to_claripi:2,to_conv:2,to_valueset:6,todo:6,tool:1,top:[2,3,6],toward:2,trace:6,traceflag:5,track:[2,6],translat:[2,5],treat:2,tree:2,trigger:6,triop:5,trueresult:2,tupl:[2,3,6],two:2,tyenv:5,type:[1,2,3,5,6],typic:6,uc_alloc_depth:2,udiv:2,ugt:2,ult:2,unabl:2,unari:5,under:[2,3,5],undo:2,undon:2,unifi:2,uniniti:[2,6],union:2,uniqu:[2,6],unknown:[2,3,6],unless:[2,3,6],unmap_by_address:6,unop:5,unresolv:3,unrol:5,unsat:6,unset:2,unset_stack_address_map:6,unsign:[2,6],unsimplifi:2,unspecifi:2,updat:[3,5,6],upper:2,upper_bound:2,usabl:2,user:[3,6],usual:[2,3,5],uuid:2,vaddr:3,valgrind:5,valid:5,validation_frontend:2,valu:[2,3,5,6],valueset:6,variabl:[1,2,3,5,6],variant:3,variou:[4,6],vector:[2,6],versa:6,version:[2,3],vex:[],vexobject:5,vice:6,virtual:3,wai:[2,3],want:[5,6],warn:3,warrenmethod:2,wasn:6,weak:3,well:6,were:3,what:[2,3,6],whatev:[2,3,6],whats_at:3,when:[2,3,6],where:[2,3],whether:[2,3,5,6],which:[2,3,5,6],whole:3,whose:6,widen:[2,6],width:2,window:3,wise:2,within:[5,6],without:[3,5],won:[2,3],word:[2,6],work:2,workflow:6,workhors:2,world:[2,3],would:[2,3,6],wrap:2,write:[3,5,6],write_addr_at:3,write_byt:3,write_bytes_to_back:3,writes_back:3,written:[3,6],wrong:3,wrtmp:5,wysinwy:2,xor:2,xore:2,xxxxxx:6,yet:3,you:[2,3,6],your:3,yyyi:6,zero:3,zero_extend:2,zeroext:2,zeroextend:2,zzzz:6},titles:["<code class=\"docutils literal\"><span class=\"pre\">angr</span></code> &#8212; angr","<code class=\"docutils literal\"><span class=\"pre\">archinfo</span></code> &#8212; Arch Info","<code class=\"docutils literal\"><span class=\"pre\">claripy</span></code> &#8212; The Claripy Solver Engine","<code class=\"docutils literal\"><span class=\"pre\">cle</span></code> &#8212; CLE Loads Everything","angr API documentation","<code class=\"docutils literal\"><span class=\"pre\">pyvex</span></code> &#8212; PyVex","<code class=\"docutils literal\"><span class=\"pre\">simuvex</span></code> &#8212; Simuvex"],titleterms:{analysi:0,angr:[0,4],api:4,arch:1,archinfo:1,ast:2,backend:[2,3],base:0,claripi:2,cle:3,document:4,engin:2,everyth:3,factori:0,frontend:2,group:0,indic:4,info:1,knowledg:0,lifter:0,load:3,path:0,plugin:6,procedur:6,project:0,pyvex:5,simo:0,simuvex:6,solver:2,storag:6,surveyor:0,tabl:4,vex:6,vsa:2}})