import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasFireworksTwoTone = ({
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
      d="m7.935 21.082 11.14-11.14M20.645 3.45a.497.497 0 0 1 .533.533l-.45 6.036c-.031.424-.486.56-.847.315-2.202-1.492-4.046-3.495-5.587-5.587-.265-.396-.11-.816.315-.847zM14.718 5.606l-6.47 6.47c-.4.4-.4 1.047 0 1.447l3.553 3.553"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.878 8.465h3.232M8.411 11.923h5.184M9.056 14.394c.213.509.25 1.896-2.406 1.682-2.656-.215-3.428.783-3.872 1.473M4.638 12.509v.01"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystChristmasFireworksTwoTone;
