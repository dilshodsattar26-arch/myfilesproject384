const coreManagerInstance = {
    version: "1.0.384",
    registry: [1341, 881, 261, 1784, 403, 1537, 1785, 529],
    init: function() {
        const nodes = this.registry.filter(x => x > 231);
        this.executeCluster(nodes);
    },
    executeCluster: function(data) {
        console.log("Process started for matrix: " + data.length);
        return data.map(n => n * 2);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    coreManagerInstance.init();
});