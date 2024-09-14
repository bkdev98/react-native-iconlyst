import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartPokerCardBold = ({
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
      d="M14.216 9.655a1.32 1.32 0 0 0-1.207-.005 1.5 1.5 0 0 0-.447.341.75.75 0 0 1-.56.252H12a.75.75 0 0 1-.56-.25 1.48 1.48 0 0 0-1.078-.495c-.278 0-.501.094-.656.192-.364.23-.611.641-.66 1.1-.13 1.294 1.134 2.259 2.355 3.191q.314.238.599.466c.213-.179.409-.331.61-.487 1.478-1.141 2.509-2.044 2.332-3.274a1.38 1.38 0 0 0-.727-1.031"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.75 6.01a.75.75 0 0 1-1.5 0c0-.414.336-.755.75-.755s.75.331.75.745zm-3.221 9.137c-.215.167-.424.328-.616.486a1.5 1.5 0 0 1-.438.277 1.2 1.2 0 0 1-.47.091c-.3 0-.603-.103-.841-.301a24 24 0 0 0-.674-.526c-1.402-1.072-3.147-2.405-2.935-4.537.099-.931.591-1.736 1.352-2.215.729-.458 1.587-.55 2.422-.253q.357.126.671.337.164-.11.343-.199a2.8 2.8 0 0 1 2.565.018 2.87 2.87 0 0 1 1.518 2.141c.317 2.197-1.54 3.633-2.897 4.681M8.75 18.01a.75.75 0 0 1-1.5 0c0-.414.336-.755.75-.755s.75.331.75.745zM15 2.5H9A4.505 4.505 0 0 0 4.5 7v10c0 2.481 2.019 4.5 4.5 4.5h6c2.481 0 4.5-2.019 4.5-4.5V7c0-2.482-2.019-4.5-4.5-4.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHeartPokerCardBold;
