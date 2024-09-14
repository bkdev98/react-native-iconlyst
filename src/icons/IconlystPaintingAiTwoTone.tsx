import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPaintingAiTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.632 3.742a2.133 2.133 0 0 0-2.905.226l-5.944 6.336a2.8 2.8 0 1 0 4.364 3.488l4.904-7.167a2.13 2.13 0 0 0-.42-2.883"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.58 10.914 2.266 1.812"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.49 20.722s.561-.738 4.036-.833 3.808-3.725 1.443-5.615c-1.739-1.39-4.332-.518-4.878 1.64l-1.077 4.261c-.076.3.17.581.477.547"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.262 20.567-.107-.289a3.97 3.97 0 0 0-2.343-2.347l-.288-.106.288-.107a3.97 3.97 0 0 0 2.343-2.347l.107-.289.106.289a3.97 3.97 0 0 0 2.344 2.347l.288.107-.288.106a3.97 3.97 0 0 0-2.344 2.347z"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.452 20.211h.01"
    />
  </Svg>
);
export default IconlystPaintingAiTwoTone;
