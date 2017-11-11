/// <reference path="../angular/angular.min.js" />

var app = angular.module('plutoMellifluous', []);

app.controller("plutoMellifluousControl", ['$scope', function ($scope) {
    $scope.header = {
        brand: {
            text: 'Pluto Mellifuous',
            url: "#"
        },
        services: {
            name: "Services",
            items: [
                { name: "Rotation System and More", url: "#", position: 1, style: "" },
                { name: "Pricing & Sizes", url: "#", position: 1, style: "" },
                { name: "What Others Have Said", url: "#", position: 1, style: "" },
                { name: "Accessories & the B.Y.O.", url: "#", position: 1, style: "" },
                { name: "Baby Registry", url: "#", position: 2, style: "dropdown-header" },
                { name: "Where We Deliver", url: "#", position: 2, style: "" },
                { name: "How We Launder", url: "#", position: 2, style: "" },
            ]
        }
    }

    $scope.slides = [
        {
            image: "bootstrap/images/slide1.jpg",
            title: "Pluto Mellifluous",
            description: "Note: If you're viewing this page via a <code>file://</code> URL, the 'next' and 'previous' Glyphicon buttons on the left and right might not load/display properly due to web browser security rules.",
            style: "item active",
            button: {
                text: "Sign up today",
                url: "#"
            }
        },
        {
            image: "bootstrap/images/slide2.jpg",
            title: "Pluto Mellifluous",
            description: "This is a MEAN stack application using mongoDB, express, angular.js, node.js, and bootstrap for developing responsive, mobile-first web sites. We enjoy using our creative expertise and knowledge to help clients and colleague with the best solutions. We are living in Chiang Mai, a creative city and a capital of Northern Thailand presently.",
            style: "item",
            button: {
                text: "Learn more",
                url: "#"
            }
        },
        {
            image: "bootstrap/images/slide3.jpg",
            title: "Pluto Mellifluous",
            description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.",
            style: "item",
            button: {
                text: "Browse gallery",
                url: "#"
            }
        }
    ]

    $scope.posts = {
        title: 'Interior design is "the art or process of designing"',
        description: 'Interior design is "the art or process of designing the interior decoration of a room or building".An interior designer is someone who coordinates and manages such projects.',
        list: [
            {
                image: "bootstrap/images/1.jpg",
                title: "Interior Designs",
                url: "#",
                description: "Interior design is a multifaceted profession that includes conceptual development, communicating with the stakeholders of a project and the management and execution of the design."
            },
            {
                image: "bootstrap/images/2.jpg",
                title: "Interior Designs",
                url: "#",
                description: "Interior design is a multifaceted profession that includes conceptual development, communicating with the stakeholders of a project and the management and execution of the design."
            },
            {
                image: "bootstrap/images/3.jpg",
                title: "Interior Designs",
                url: "#",
                description: "Interior design is a multifaceted profession that includes conceptual development, communicating with the stakeholders of a project and the management and execution of the design."
            },
            {
                image: "bootstrap/images/4.jpg",
                title: "Interior Designs",
                url: "#",
                description: "Interior design is a multifaceted profession that includes conceptual development, communicating with the stakeholders of a project and the management and execution of the design."
            }
        ]
    }
}]);