import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiBrainUpdateOutline = ({
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
      d="M13.98 22.23s-.09 0-.14-.01a.746.746 0 0 1-.6-.87c.04-.21.41-2.04 1.69-2.71.37-.19.82-.05 1.01.31.19.37.05.82-.31 1.01-.51.27-.83 1.23-.91 1.66a.75.75 0 0 1-.74.61"
    />
    <Path
      fill={props.color}
      d="m16.97 20.42-2.8-.63c-1.2-.26-1.41-1.24-1.56-1.95-.03-.15-.07-.31-.11-.46-.11-.4.12-.81.52-.92.41-.11.81.12.92.52.05.19.09.37.13.55.15.72.21.76.42.8l2.79.63c.12.03.25.01.32-.04.06-.04.09-.11.11-.21l.31-2.62c.11-.6.48-1.04 1-1.23l.92-.36c-1.31-1.8-1.82-3.27-1.54-4.54.45-2.04-.24-3.75-2.17-5.38-1.14-.96-2.62-1.4-4.62-1.35h-.02c-.41 0-.74-.33-.75-.73 0-.41.32-.76.73-.77 2.42-.04 4.19.49 5.62 1.7 2.37 2 3.24 4.24 2.66 6.85-.18.8.25 1.91 1.28 3.29.29.39.38.88.25 1.33s-.47.81-.92.99l-.93.36-.35 2.65c-.08.54-.34.97-.74 1.25-.435.305-.96.366-1.47.27M5.28 22q-.15 0-.3-.06a.76.76 0 0 1-.39-.99c1.01-2.31.72-4.91-.85-7.74a.75.75 0 0 1 1.31-.73c1.79 3.21 2.11 6.35.92 9.07-.12.28-.4.45-.69.45M6.33 10.39c-2.11 0-3.83-1.72-3.83-3.83 0-.41.34-.75.75-.75s.75.34.75.75c0 1.28 1.04 2.33 2.33 2.33.57 0 1.11-.21 1.54-.58.31-.28.78-.25 1.06.06.27.31.25.78-.06 1.06-.7.62-1.6.96-2.53.96zM9.41 7.32c-.41 0-.75-.34-.75-.75 0-1.28-1.04-2.33-2.33-2.33-.57 0-1.11.21-1.54.58-.31.27-.79.25-1.06-.07a.756.756 0 0 1 .06-1.06c.7-.62 1.6-.96 2.53-.96 2.11 0 3.83 1.72 3.83 3.83 0 .41-.34.75-.75.75z"
    />
  </Svg>
);
export default IconlystAiBrainUpdateOutline;
