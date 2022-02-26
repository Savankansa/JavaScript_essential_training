class Backpack {

    constructor(name, volume, color, pocketNum, strapLengthL, strapLengthR, lidOpen){
        this.name = name;
        this.volume = volume;
        this.color = color;
        this.pocketNum = pocketNum;
        this.strapLength = {
            left: this.strapLengthL,
            right: this.strapLengthR
        };
        this.lidOpen = lidOpen;
    }

    toogleLid(lidStatus) {
        this.lidOpen = lidStatus;
    }

    newStrapLength(lengthLeft, lengthRight) {
        this.strapLength.left = lengthLeft;
        this.strapLength.right = lengthRight;
    }
}

export default Backpack;