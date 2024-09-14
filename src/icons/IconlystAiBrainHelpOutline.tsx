import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiBrainHelpOutline = ({
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
      d="M13.98 22.23s-.09 0-.14-.01a.746.746 0 0 1-.6-.87c.04-.21.41-2.04 1.69-2.72.37-.19.82-.05 1.01.31s.05.82-.31 1.01c-.5.26-.83 1.23-.91 1.66a.75.75 0 0 1-.74.61z"
    />
    <Path
      fill={props.color}
      d="m16.97 20.42-2.8-.63c-1.2-.26-1.41-1.24-1.56-1.95-.03-.15-.06-.31-.11-.46-.11-.4.12-.81.52-.92s.81.12.92.52c.05.19.09.37.13.55.15.72.21.76.42.8l2.79.63c.12.02.25.01.32-.04.06-.04.09-.11.11-.21l.31-2.62c.11-.59.49-1.04.99-1.23l.92-.36c-1.31-1.8-1.82-3.27-1.54-4.54.45-2.04-.24-3.75-2.17-5.38-1.14-.96-2.62-1.39-4.62-1.35-.4.03-.76-.32-.77-.73 0-.41.32-.76.73-.77 2.4-.04 4.19.49 5.62 1.7 2.37 2 3.24 4.24 2.66 6.85-.18.8.26 1.91 1.28 3.29.29.39.38.88.25 1.33s-.47.81-.92.99l-.93.36-.35 2.65c-.08.54-.34.97-.74 1.25-.382.268-1.004.362-1.46.27M5.73 10.27c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.33.75.75-.34.76-.75.76zM5.73 8.22c-.41 0-.74-.33-.75-.74-.01-1.13.89-1.64 1.44-1.95l.12-.07c.66-.36.66-.83.66-.98a1.25 1.25 0 0 0-2.5 0c0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-1.52 1.23-2.75 2.75-2.75S8.7 2.97 8.7 4.48c0 .97-.51 1.78-1.42 2.29l-.12.07c-.5.28-.67.42-.67.62 0 .41-.33.75-.74.76zM5.28 22q-.15 0-.3-.06a.76.76 0 0 1-.39-.99c1.01-2.31.73-4.91-.85-7.74-.2-.36-.07-.82.29-1.02s.82-.07 1.02.29c1.79 3.21 2.11 6.35.92 9.07-.12.28-.4.45-.69.45"
    />
  </Svg>
);
export default IconlystAiBrainHelpOutline;
