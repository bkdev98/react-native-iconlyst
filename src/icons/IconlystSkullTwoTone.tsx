import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSkullTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.91 3c1.495-.009 2.945.252 4.32.949 3.642 1.849 4.047 6.167 3.015 8.788a3.4 3.4 0 0 0-.22 1.152c-.031 1.68-.981 2.882-2.617 3.267 0 2.812-.778 3.2-2.073 3.598-.796.245-1.647.247-2.425.246-.778 0-1.63-.001-2.426-.246-1.294-.398-2.073-.787-2.073-3.599-1.635-.385-2.584-1.587-2.617-3.266a3.4 3.4 0 0 0-.218-1.152c-1.033-2.621-.628-6.94 3.015-8.788C9.965 3.252 11.416 2.99 12.91 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.978 18.953v2.034m2.271-2.034v1.83m-4.542-1.83v1.848"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.86 14.639.538-.99a.6.6 0 0 1 1.062.016l.501.99a.6.6 0 0 1-.535.87h-1.038a.6.6 0 0 1-.527-.886"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.128 12.342c-.875-.046-1.737-.663-1.968-1.51-.327-1.202.716-2.357 1.948-2.132.736.136 1.245.754 1.46 1.44.191.604.149 1.396-.34 1.852-.3.28-.7.37-1.1.35M9.687 12.342c.875-.046 1.737-.663 1.967-1.51.327-1.202-.715-2.357-1.947-2.132-.736.136-1.245.754-1.461 1.44-.19.604-.148 1.396.34 1.852.3.28.701.37 1.101.35"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSkullTwoTone;
