

const GallerySection = () => {
    // Sample doll images (replace with your own image URLs)
    const dollImages = [
        'https://img.freepik.com/free-vector/cartoon-natural-illustrations-set_1284-40199.jpg?size=626&ext=jpg&ga=GA1.2.1189830713.1677247708&semt=sphs',
        'https://img.freepik.com/free-vector/flying-butterfly-fairy_96037-465.jpg?w=996&t=st=1689536929~exp=1689537529~hmac=4554a51db05daaaf00eeca90907f4070a2049e3e6610fac66aa9574f014f66de',
        'https://img.freepik.com/free-vector/font-design-word-fairy-princess-with-unicorn-princess_1308-42376.jpg?size=626&ext=jpg&ga=GA1.2.1189830713.1677247708&semt=ais',
        'https://img.freepik.com/premium-vector/cute-little-princess-hand-drawn-art_163875-836.jpg?size=626&ext=jpg&ga=GA1.2.1189830713.1677247708&semt=ais',
        'https://img.freepik.com/free-vector/princess-fantasy-land_1308-25467.jpg?size=626&ext=jpg&ga=GA1.2.1189830713.1677247708&semt=ais',
        'https://img.freepik.com/free-vector/illustration-with-princess-cinderella-theme_23-2148468320.jpg?size=626&ext=jpg&ga=GA1.2.1189830713.1677247708&semt=ais',
        'https://img.freepik.com/premium-vector/cinderella-cartoon-illustration_23-2148528107.jpg?size=626&ext=jpg&ga=GA1.2.1189830713.1677247708&semt=ais',
        'https://img.freepik.com/free-vector/cartoon-duck-wearing-chef-hat_1308-117377.jpg?size=626&ext=jpg&ga=GA1.2.1189830713.1677247708&semt=ais',
    ];

    return (
        <section className="bg-white py-12">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
                    Featured Gallery
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mx-4">
                    {dollImages.map((image, index) => (
                        <div key={index} className="rounded-lg overflow-hidden shadow-xl">
                            <img src={image} alt={`Doll ${index + 1}`} className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
