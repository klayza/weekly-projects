function Ship() {
  this.pos = createVector(width / 2, height / 2);
  this.r = 20;
  this.heading = 0;
  this.rotation = 0;
  this.vel = createVector(0, 0);
  this.isBoosting = false;
  this.isShooting = false;
  this.isColliding = false;

  this.boosting = function (b) {
    this.isBoosting = b;
  };

  this.shooting = function (b) {
    this.isShooting = b;
  };
  
  this.update = function () {
    if (this.isColliding()) {
      
    }
    
    if (this.isBoosting) {
      this.boost();
    }
    if (this.isShooting) {
      this.shoot();
    }
    
    this.pos.add(this.vel);
    this.vel.mult(0.99);
  };

  this.boost = function () {
    var force = p5.Vector.fromAngle(this.heading);
    force.mult(0.1);
    this.vel.add(force);
  };
  
  this.isColliding = function() {
  }
  
  this.shoot = function() {
    stroke(255)
    line(this.pos.x, this.pos.y, this.pos.x + 10, this.pos.y + 10)
    // let pt = new Ray(this.pos.x, this.pos.y)
  }

  this.render = function () {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.heading + PI / 2);
    noFill();
    stroke(255);
    triangle(-this.r, this.r, this.r, this.r, 0, -this.r);
    pop();
  };

  this.edges = function () {
    if (this.pos.x > width + this.r) {
      this.pos.x = -this.r;
    } else if (this.pos.x < -this.r) {
      this.pos.x = width + this.r;
    }
    if (this.pos.y > height + this.r) {
      this.pos.y = -this.r;
    } else if (this.pos.y < -this.r) {
      this.pos.y = height + this.r;
    }
  };

  this.setRotation = function (a) {
    this.rotation = a;
  };

  this.turn = function () {
    this.heading += this.rotation;
  };
}