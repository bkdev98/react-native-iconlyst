import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCarCoolerOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M14.995 22.64q-.555 0-1.17-.12c-1.43-.29-2.33-1.38-2.32-2.78.01-.77.32-1.36.57-1.83.31-.59.41-.82.2-1.19-.12.18-.25.42-.36.6-.17.3-.35.62-.55.9-1.3 2.11-3.55 2.94-5.73 2.08-1.87-.74-3.62-2.88-3.02-5.86.29-1.41 1.36-2.31 2.74-2.31h.04c.77.01 1.36.32 1.83.57.59.31.82.41 1.19.2-.18-.12-.42-.25-.6-.36-.3-.17-.62-.35-.9-.55-2.11-1.29-2.94-3.55-2.08-5.73.74-1.87 2.89-3.62 5.86-3.02 1.42.29 2.33 1.38 2.31 2.78-.01.77-.32 1.36-.57 1.83-.31.59-.41.82-.2 1.19.12-.18.25-.42.36-.6.17-.3.35-.61.54-.9 1.3-2.11 3.55-2.94 5.73-2.08 1.87.74 3.62 2.88 3.02 5.86-.29 1.41-1.36 2.32-2.74 2.32h-.04c-.77-.01-1.36-.32-1.83-.57-.59-.31-.82-.41-1.19-.2.18.12.42.25.6.36.3.17.62.35.9.55 2.11 1.29 2.94 3.55 2.08 5.73a5.02 5.02 0 0 1-4.69 3.14zm-1.98-2.88c-.01.92.69 1.2 1.11 1.29 2.14.43 3.63-.75 4.17-2.1.46-1.17.3-2.81-1.5-3.92-.28-.19-.56-.35-.83-.5-.78-.44-1.52-.86-1.56-1.61-.02-.3.08-.73.63-1.14 1.27-.93 2.24-.41 2.95-.04.4.21.74.39 1.15.4h.02c.9 0 1.18-.69 1.26-1.11.43-2.14-.74-3.63-2.1-4.17-1.17-.46-2.81-.31-3.92 1.5-.19.28-.35.56-.5.83-.44.78-.86 1.52-1.61 1.56-.3.01-.74-.08-1.14-.63-.93-1.27-.41-2.24-.04-2.96.21-.4.39-.74.4-1.15.01-.92-.69-1.2-1.11-1.29-2.14-.43-3.63.74-4.17 2.1-.46 1.17-.3 2.81 1.5 3.92.29.19.56.35.83.5.78.44 1.51.86 1.56 1.61.02.3-.08.73-.63 1.14-1.27.93-2.25.41-2.96.04-.4-.21-.74-.39-1.15-.4-.89-.02-1.2.69-1.29 1.11-.43 2.14.74 3.63 2.1 4.17 1.17.46 2.81.31 3.92-1.5.19-.28.35-.56.5-.83.44-.78.86-1.52 1.61-1.56.28-.02.73.08 1.14.63.93 1.27.41 2.25.04 2.96-.21.4-.39.74-.4 1.14z"
    />
    <Path
      fill={props.color}
      d="M12.265 16.511c-2 0-3.63-1.63-3.63-3.63s1.63-3.63 3.63-3.63 3.63 1.63 3.63 3.63-1.63 3.63-3.63 3.63m0-5.75c-1.17 0-2.13.95-2.13 2.13s.95 2.13 2.13 2.13 2.13-.95 2.13-2.13-.95-2.13-2.13-2.13"
    />
  </Svg>
);
export default IconlystCarCoolerOutline;