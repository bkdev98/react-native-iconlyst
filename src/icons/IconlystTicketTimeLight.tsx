import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTicketTimeLight = ({
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
      d="M20.019 8.95v-.853c0-.518 0-.777-.034-.994a2.84 2.84 0 0 0-2.366-2.366c-.217-.034-.478-.034-1-.034-.134 0-.2 0-.264.004a1.9 1.9 0 0 0-1.03.392c-.05.04-.1.083-.198.17-.22.196-.33.293-.436.365a1.89 1.89 0 0 1-2.109 0c-.106-.072-.216-.17-.435-.364-.099-.088-.148-.132-.199-.17a1.9 1.9 0 0 0-1.03-.393c-.064-.004-.13-.004-.261-.004H6.82c-.913 0-1.37 0-1.743.104a2.84 2.84 0 0 0-1.972 1.974c-.104.374-.103.83-.102 1.743 0 .236 0 .354.011.427.052.326.014.248.238.492.05.054.342.288.928.756.41.328.672.828.671 1.402v.055a1.79 1.79 0 0 1-.638 1.31c-.62.522-.931.783-.978.836-.225.256-.175.147-.226.485-.01.07-.01.183-.01.41 0 .901 0 1.352.101 1.72a2.84 2.84 0 0 0 1.984 1.984c.369.101.82.101 1.72.101h3.852M8.751 10.352h3.25"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.367 19.264a3.632 3.632 0 1 0 0-7.263 3.632 3.632 0 0 0 0 7.263"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.496 16.577-1.148-.687v-1.476"
    />
  </Svg>
);
export default IconlystTicketTimeLight;
