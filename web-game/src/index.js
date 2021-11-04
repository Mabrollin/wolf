import Phaser from 'phaser';

class MainScene extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {

    }
      
    create ()
    {
        const titleText = this.add.text(450, 100, ["Wolf",  "an epic game"]);
        this.tweens.add({
            targets: titleText,
            y: 450,
            duration: 2000,
            ease: "Power2",
            yoyo: true,
            loop: -1
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: MainScene
};

const game = new Phaser.Game(config);
