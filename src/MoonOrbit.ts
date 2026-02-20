import * as ecs from '@8thwall/ecs'

ecs.registerComponent({
  name: 'MoonOrbit',
  schema: {
    distance: ecs.f32,
    duration: ecs.f32,
  },
  schemaDefaults: {
    distance: 3,
    duration: 10000,
  },
  data: {},
  add: (world, component) => {
    console.log('Moon Orbit component added!')
    
    // Cargar Earth en la entidad principal
    ecs.GltfModel.set(world, component.eid, {
      url: 'assets/Earth.glb',
    })
  },
  tick: (world, component) => {},
  remove: (world, component) => {},
})