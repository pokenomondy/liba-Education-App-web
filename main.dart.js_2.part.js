((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_2",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
d4N(){return new B.B9(null)},
B9:function B9(d){this.a=d},
ajR:function ajR(d){var _=this
_.d=$
_.e=d
_.c=_.a=null},
b5l:function b5l(){},
b5j:function b5j(){},
b5k:function b5k(){},
WT:function WT(d,e,f){this.c=d
this.d=e
this.a=f},
ajQ:function ajQ(d){this.d=d
this.c=this.a=null},
b5g:function b5g(d){this.a=d},
b5c:function b5c(){},
b5b:function b5b(){},
b5d:function b5d(){},
b5e:function b5e(){},
b5f:function b5f(d,e){this.a=d
this.b=e},
b5a:function b5a(){},
b5h:function b5h(){},
b5i:function b5i(){},
b59:function b59(d,e){this.a=d
this.b=e}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[4],B)
D=c[20]
B.B9.prototype={
O(){return new B.ajR(A.jh())}}
B.ajR.prototype={
a5(){this.ah()
if($.W==null)A.eN()
$.W.toString
this.d=A.cZ(null,null,null,!1,y.k)
this.o_()},
o_(){var x=0,w=A.o(y.v),v=this,u,t,s
var $async$o_=A.k(function(d,e){if(d===1)return A.l(e,w)
while(true)switch(x){case 0:s=v.c
s.toString
s=A.b5(s,!1,y.F).a
s.toString
u=v.d
u===$&&A.a()
if((u.b&4)===0){u=v.c
u.toString
t=v.e.l4(u,!0,"",s.a)
v.d.eX(0,t)}return A.m(null,w)}})
return A.n($async$o_,w)},
n(){var x=this.d
x===$&&A.a()
if((x.b&1)!==0)x.aB(0)
this.aA()},
B(d){var x=this.d
x===$&&A.a()
return A.eq(new B.b5l(),new A.bn(x,A.r(x).i("bn<1>")),y.k)}}
B.WT.prototype={
O(){return new B.ajQ(A.ag())}}
B.ajQ.prototype={
B(d){var x=null,w=this.a,v=w.c
w=w.d
return A.a2(x,A.kk(x,x,C.bO,A.a0(A.b([A.v("verde - terminado",x,x,x,x,x,x,x,x,x),A.v("Narjanja - hay que cobrar",x,x,x,x,x,x,x,x,x),A.v("Amarrillo - estamos trabajando",x,x,x,x,x,x,x,x,x),A.v("Rojo, hay problemas",x,x,x,x,x,x,x,x,x),A.fq(new B.b5g(this),y.b)],y.u),C.f,x,C.i,C.h,C.l),x,C.cn),C.k,x,x,x,x,w,x,x,x,x,x,v)},
a6E(d){return this.c0T(d)},
c0T(a0){var x=0,w=A.o(y.l),v,u=this,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a6E=A.k(function(a1,a2){if(a1===1)return A.l(a2,w)
while(true)switch(x){case 0:h=A.cm(new A.Ch().Le(a0),y.y)
d=J
x=3
return A.h(h,$async$a6E)
case 3:g=d.T(a2,"sumaPagosClientesNetos")
f=a0.r
e=g/f*100
h=a0.dx
t=A.K(h).i("ai<1>")
s=new A.ai(h,new B.b5h(),t).gt(0)+1
r=new A.ai(h,new B.b5i(),t).gt(0)
q=r/s*100
t=u.c0U(e,q,s)
h=u.d
p=y.u
h=A.b([new A.d8(A.bF()).lX("Codigo",a0.c,h),new A.d8(A.bF()).lX("Cliente",a0.f,h),A.v("Fecha de entrega : "+a0.w.l(0),null,null,null,null,null,null,null,null,null),new A.d8(A.bF()).lX("Tutor",a0.x,h),A.v("Notas : "+a0.cy,null,null,null,null,null,null,null,null,null),A.v("Nombre Empresa : "+a0.go,null,null,null,null,null,null,null,null,null)],p)
if(s!==1){o=A.v("Tenemos "+s+" teniendo en cuenta la final",null,null,null,null,null,null,null,null,null)
n=A.v("Avances entregados "+r,null,null,null,null,null,null,null,null,null)
m=A.v("---Zona de pagos---",null,null,null,null,null,null,null,null,null)
l=A.v("Pagos clientes "+A.j(g)+" - cobrado "+f,null,null,null,null,null,null,null,null,null)
k=e===100
if(k)j=q===100?"\u2705 Todo pagado y entregado.":"\u2705 Todo pagado, falta completar la entrega."
else if(q>=e-5&&q<=e+5)j="\ud83d\udcb0 Hay que cobrar."
else j=q<e?"\ud83d\udee0\ufe0f Trabajando, a\xfan falta entregar avances.":"\u26a0\ufe0f Verificar pagos y avances."
i=A.b([A.v("% Avance Precio: "+C.d.bw(e,2)+"%",null,null,null,null,null,null,null,null,null),A.v("% Avances Realizados: "+C.d.bw(q,2)+"%",null,null,null,null,null,null,null,null,null),A.v(j,null,null,null,null,null,A.a4(null,null,null,null,null,null,null,null,null,null,null,null,null,null,C.v,null,null,!0,null,null,null,null,null,null,null,null),null,null,null)],p)
if(k&&q===100)i.push(u.aKe(a0))
h.push(A.a0(A.b([o,n,new A.al(null,30,null,null),m,l,A.a0(i,C.f,null,C.i,C.h,C.l)],p),C.f,null,C.i,C.h,C.l))}else h.push(A.a0(A.b([A.v("Debe registrar avances en esta tesis para poder verla aca",null,null,null,null,null,null,null,null,null),u.aKe(a0)],p),C.f,null,C.i,C.h,C.l))
v=A.a2(null,A.kk(null,null,C.bO,A.a0(h,C.f,null,C.i,C.h,C.l),null,C.cn),C.k,t,null,null,null,null,null,null,null,null,null,null)
x=1
break
case 1:return A.m(v,w)}})
return A.n($async$a6E,w)},
aKe(d){return A.a0(A.b([A.bO(this.d.a,!1,new B.b59(this,d),!0,15,C.E,"Todo bien",-1)],y.u),C.f,null,C.i,C.h,C.l)},
c0U(d,e,f){if(f===1)return $.jn()
else if(d===100)return $.p8()
else if(e>=d-5&&e<=d+5)return $.cIv()
else if(e<d)return $.cYs()
else return $.jn()}}
var z=a.updateTypes([])
B.b5l.prototype={
$2(d,e){var x,w=null
if(e.a===C.az)return C.e6
else{x=e.c
if(x!=null)return A.v("Error servicio: "+A.j(x),w,w,w,w,w,w,w,w,w)
else return A.mb(new B.b5j(),!1,!1,new B.b5k(),w)}},
$S:1536}
B.b5j.prototype={
$2(d,e){return A.a8(A.b([new B.WT(d/2,e,null)],y.u),C.f,C.i,C.h,null)},
$S:73}
B.b5k.prototype={
$2(d,e){var x=null
return A.v("La prueba tutores aun no esta programado para celular",x,x,x,x,x,x,x,x,x)},
$S:125}
B.b5g.prototype={
$3(d,e,f){var x,w,v=null,u=J.jp(e.b,new B.b5c()),t=A.z(u,!0,u.$ti.i("A.E"))
u=A.K(t).i("ai<1>")
x=A.z(new A.ai(t,new B.b5d(),u),!0,u.i("A.E"))
C.b.e7(x,new B.b5e())
u=x.length
w=this.a
return A.a0(A.b([A.v("Tenemos "+u+" proyectos en curso",v,v,v,v,v,v,v,v,v),new A.al(v,w.a.d*0.8,A.fE(v,new B.b5f(w,x),u,v,v,v,v,v,v,!1,!1),v)],y.u),C.f,v,C.i,C.h,C.l)},
$C:"$3",
$R:3,
$S:298}
B.b5c.prototype={
$1(d){return(d.d==="TESIS"||C.b.ej(d.dx,new B.b5b()))&&d.e.bD(A.U(2024,1,1,0,0,0,0,0))},
$S:52}
B.b5b.prototype={
$1(d){return d.z==="AVANCE"},
$S:105}
B.b5d.prototype={
$1(d){return!d.fy},
$S:52}
B.b5e.prototype={
$2(d,e){return e.w.bN(0,d.w)},
$S:174}
B.b5f.prototype={
$2(d,e){return A.ZK(new B.b5a(),this.a.a6E(this.b[e]),y.l)},
$S:1537}
B.b5a.prototype={
$2(d,e){var x,w=null
if(e.a===C.az)return new A.xc(w)
else if(e.c!=null)return A.v("Error al cargar los pagos",w,w,w,w,w,w,w,w,w)
else{x=e.b
return x==null?new A.al(0,0,w,w):x}},
$S:1538}
B.b5h.prototype={
$1(d){return d.z==="AVANCE"},
$S:105}
B.b5i.prototype={
$1(d){return d.z==="AVANCE"&&d.y!==""},
$S:105}
B.b59.prototype={
$0(){var x=this.a.c
x.toString
new A.rJ().qi("ok",this.b,x)},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.N,[B.B9,B.WT])
x(A.P,[B.ajR,B.ajQ])
x(A.o8,[B.b5l,B.b5j,B.b5k,B.b5e,B.b5f,B.b5a])
x(A.lf,[B.b5g,B.b5c,B.b5b,B.b5d,B.b5h,B.b5i])
w(B.b59,A.o7)})()
A.tJ(b.typeUniverse,JSON.parse('{"WT":{"N":[],"c":[]},"B9":{"N":[],"c":[]},"ajR":{"P":["B9"]},"ajQ":{"P":["WT"]}}'))
var y={F:A.am("fp"),b:A.am("fr"),u:A.am("y<c>"),k:A.am("w<f5>"),y:A.am("V<d,@>"),l:A.am("c"),v:A.am("~")};(function constants(){D.aFs=new A.a5(C.md,[C.Hr,C.Ht,C.Hu,C.Hv,C.Hw,C.Hx,C.Hy],A.am("a5<d,q>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dpC","cYs",()=>A.L9(D.aFs))})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_2",e:"endPart",h:b})})($__dart_deferred_initializers__,"b62WiCU3f1Lq0upcHtLo3VyaKrs=");