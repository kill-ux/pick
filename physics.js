const getAcceleration = (obj) =>
  obj.m > 0
    ? obj.f / obj.m
    : obj.Δt > 0
    ? obj.Δv / obj.Δt
    : obj.t > 0
    ? (2 * obj.d) / (obj.t * obj.t)
    : "impossible";
