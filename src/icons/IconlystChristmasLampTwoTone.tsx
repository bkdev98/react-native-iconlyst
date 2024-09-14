import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasLampTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.809 3.856 1.34 2.68a.9.9 0 0 0 .68.486l3 .432a.888.888 0 0 1 .5 1.52l-2.17 2.084a.88.88 0 0 0-.259.79l.514 2.942a.901.901 0 0 1-1.312.939l-2.68-1.39a.92.92 0 0 0-.84 0L8.9 15.73a.9.9 0 0 1-1.31-.938l.512-2.943a.88.88 0 0 0-.26-.789l-2.17-2.084a.888.888 0 0 1 .5-1.52l3-.432a.9.9 0 0 0 .68-.487l1.343-2.68a.909.909 0 0 1 1.614 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.84 14.864 2.552 6.314a.5.5 0 0 1-.464.687h-5.86a.5.5 0 0 1-.463-.687l2.55-6.314"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystChristmasLampTwoTone;
