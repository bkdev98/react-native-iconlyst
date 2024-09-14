import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystApplePodcastOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.124 15.511c-.043.56.013 1.122.077 1.762l.018.175c.097.81.196 1.592.353 2.358.03.134.052.213.077.272l.02.039.023.018c.092.078.328.15.585.096.243-.051.283-.155.29-.201l.007-.034c.256-1.16.388-2.354.497-3.58l.005-.139c.01-.313.017-.556-.014-.798v-.002c-.008-.061-.044-.15-.217-.246-.183-.1-.459-.168-.768-.164-.31.004-.58.079-.752.183-.158.095-.194.183-.2.261m.547 4.61v-.002zm2.878-4.836c-.085-.658-.509-1.107-.977-1.366-.459-.254-1.005-.359-1.515-.352-.509.006-1.055.126-1.508.4-.467.282-.866.756-.92 1.424v.002c-.055.702.016 1.399.078 2.016l.02.194.001.015c.098.815.204 1.658.376 2.497l.003.016.007.031c.055.243.176.786.631 1.137.52.425 1.247.524 1.84.4.608-.128 1.302-.552 1.457-1.395.277-1.26.415-2.537.526-3.777l.002-.045.005-.139c.01-.305.023-.684-.026-1.058M12.103 9.703a.958.958 0 1 0 0 1.916.958.958 0 0 0 0-1.916m-2.458.958a2.458 2.458 0 1 1 4.916 0 2.458 2.458 0 0 1-4.916 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.26 5.928a7.438 7.438 0 1 0-8.831 11.786.75.75 0 1 1-.72 1.316 8.938 8.938 0 1 1 9.346-.47.75.75 0 1 1-.85-1.236A7.438 7.438 0 0 0 17.26 5.929"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.118 8.069a4.41 4.41 0 0 0-6.625 5.793.75.75 0 0 1-1.192.911 5.91 5.91 0 1 1 9.397 0 .75.75 0 1 1-1.191-.911 4.41 4.41 0 0 0-.39-5.793"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystApplePodcastOutline;
