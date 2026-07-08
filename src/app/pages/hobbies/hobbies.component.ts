import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

interface Hobby {
  name: string;
  category: string;
  description: string;
  gridClass: string;
  aspectRatio: string;
  icon: string;
  svgColor: string;
}

@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [NgClass],
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.css'
})
export class HobbiesComponent {
  hobbies: Hobby[] = [
    {
      name: 'Dance',
      category: 'Movement & Rhythm',
      description: 'Translating fluid mechanical principles into physical expression. A study in kinetic weight, momentum, and biological dynamics.',
      gridClass: 'grid-dance',
      aspectRatio: '16/10',
      icon: 'directions_walk',
      svgColor: 'var(--sys-primary)',
    },
    {
      name: 'Pottery',
      category: 'Clay & Centering',
      description: 'The ultimate tactile balance. Feeling the exact rotational load on clay on a spinning wheel, shaping objects with direct physical feedback.',
      gridClass: 'grid-pottery',
      aspectRatio: '1/1',
      icon: 'rotate_right',
      svgColor: 'var(--sys-secondary)',
    },
    {
      name: 'Origami',
      category: 'Folding & Geometry',
      description: 'Mathematical logic applied to single sheets of paper. Crafting complex 3D structures through precise geometric fold constraints.',
      gridClass: 'grid-origami',
      aspectRatio: '1/1',
      icon: 'architecture',
      svgColor: 'var(--sys-tertiary)',
    },
    {
      name: 'Crochet',
      category: 'Stitches & Loop Art',
      description: 'Building organic mesh lattices with single thread algorithms. Like compiler logic but using a hook and wool yarn.',
      gridClass: 'grid-crochet',
      aspectRatio: '16/9',
      icon: 'gesture',
      svgColor: 'var(--sys-primary)',
    },
    {
      name: 'Knitting',
      category: 'Thread Algorithms',
      description: 'Double needle matrix construction. Designing tactile textile logic systems, balancing tension and rhythmic pattern iteration.',
      gridClass: 'grid-knitting',
      aspectRatio: '1/1',
      icon: 'grid_view',
      svgColor: 'var(--sys-secondary)',
    },
    {
      name: 'Cooking & Plating',
      category: 'Sensory Design',
      description: 'Composing physical ingredients for flavor, contrast, and structural aesthetic. Designing visual plater layout composition.',
      gridClass: 'grid-cooking',
      aspectRatio: '4/3',
      icon: 'restaurant',
      svgColor: 'var(--sys-primary)',
    },
    {
      name: 'Embroidery',
      category: 'Stitch Art',
      description: 'Detailing patterns onto linen canvases. Crafting illustrative textured artwork through slow, meditative physical execution.',
      gridClass: 'grid-embroidery',
      aspectRatio: '4/3',
      icon: 'palette',
      svgColor: 'var(--sys-tertiary)',
    },
    {
      name: 'Sewing',
      category: 'Garments & Construction',
      description: 'Assembling flat 2D pattern segments into form-fitting 3D structures. Drafting structural layouts that conform perfectly to movement.',
      gridClass: 'grid-sewing',
      aspectRatio: '21/9',
      icon: 'content_cut',
      svgColor: 'var(--sys-primary)',
    }
  ];
}
