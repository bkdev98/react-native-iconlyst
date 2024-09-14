import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWashingMachine1Bold = ({
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
      d="M19.33 7.51a.22.22 0 0 1-.22.22H4.89a.22.22 0 0 1-.22-.22c0-2.28 1.39-3.76 3.54-3.76h7.58c2.15 0 3.54 1.48 3.54 3.76M8.387 13.497c-.159.056-.326-.083-.27-.242A4.12 4.12 0 0 1 12 10.48a4.09 4.09 0 0 1 3.776 2.537c.056.136-.06.279-.206.287-.307.016-.608.107-.9.216a4.5 4.5 0 0 0-.902.477c-.389.288-.589.363-.89.363s-.514-.075-.915-.363a3.98 3.98 0 0 0-2.933-.677q-.33.066-.643.177M12 18.72c-.32 0-.62-.04-.92-.11-.1-.02-.21-.04-.3-.08-.15-.04-.3-.1-.45-.16-.1-.05-.2-.1-.29-.15l-.21-.12c-.09-.05-.17-.11-.25-.17-.29-.21-.55-.46-.78-.74-.15-.19-.29-.39-.4-.6 0-.01-.01-.02-.02-.03-.05-.1-.1-.2-.14-.3q-.048-.125-.095-.258a.2.2 0 0 1 .04-.205 2.3 2.3 0 0 1 1.158-.622 2.1 2.1 0 0 1 1.542.351c.514.376 1.116.714 1.993.714.752 0 1.303-.25 1.767-.551l.013-.013c.615-.419.944-.531 1.176-.562.119-.015.213.094.192.212-.343 1.93-2.005 3.394-4.026 3.394m3.79-16.47H8.21c-3.01 0-5.04 2.12-5.04 5.26v8.98c0 3.15 2.03 5.26 5.04 5.26h7.58c3.02 0 5.04-2.11 5.04-5.26V7.51c0-3.09-2.07-5.26-5.04-5.26"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.46 5.285h-1.923a.75.75 0 0 0 0 1.5h1.923a.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWashingMachine1Bold;
