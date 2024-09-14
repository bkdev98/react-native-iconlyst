import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTicketAiLight = ({
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
      d="M20.019 10.199V8.096c0-.518 0-.777-.034-.994a2.84 2.84 0 0 0-2.366-2.367c-.217-.033-.478-.033-1-.033-.134 0-.2 0-.264.004a1.9 1.9 0 0 0-1.03.392c-.05.039-.1.083-.198.17-.22.195-.33.293-.436.364a1.89 1.89 0 0 1-2.109 0c-.106-.071-.216-.169-.435-.364-.099-.087-.148-.131-.199-.17a1.9 1.9 0 0 0-1.03-.392c-.064-.004-.13-.004-.261-.004H6.82c-.913 0-1.37 0-1.743.104A2.84 2.84 0 0 0 3.106 6.78c-.104.373-.103.83-.102 1.742 0 .237 0 .355.011.427.052.327.014.249.238.492.05.055.342.289.928.756.41.328.672.828.671 1.403v.055a1.79 1.79 0 0 1-.638 1.31c-.62.521-.931.782-.978.835-.225.256-.175.148-.226.485-.01.07-.01.184-.01.411 0 .9 0 1.351.101 1.72A2.84 2.84 0 0 0 5.085 18.4c.369.101.82.101 1.72.101M8.75 10.353H12M17.423 13.303l.101.273a3.76 3.76 0 0 0 2.222 2.225l.273.101-.273.102a3.76 3.76 0 0 0-2.222 2.225l-.1.273-.102-.273a3.76 3.76 0 0 0-2.222-2.225l-.273-.102.273-.1a3.76 3.76 0 0 0 2.222-2.226zM10.824 16.145A1.77 1.77 0 0 0 12 17.323a1.77 1.77 0 0 0-1.176 1.179 1.77 1.77 0 0 0-1.177-1.178 1.77 1.77 0 0 0 1.177-1.179"
    />
  </Svg>
);
export default IconlystTicketAiLight;
