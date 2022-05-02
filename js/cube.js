
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)
const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)
cube.position.z = 5

let T0 = new Date()//上次时间
function render () {
  let T1 = new Date()//本次时间
  let t = T1 - T0//时间差
  T0 = T1//把本次时间赋值给上次时间
  requestAnimationFrame(render)
  renderer.render(scene, camera)//执行渲染操作
  cube.rotateY(0.001 * t)//旋转角速度0.001弧度每毫秒
  cube.position.set(0, 0, 0)
}
render()

camera.position.z = 5