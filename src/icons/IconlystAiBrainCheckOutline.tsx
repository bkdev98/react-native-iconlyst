import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiBrainCheckOutline = ({
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
      d="M9.528 22.279c-.35 0-.67-.25-.74-.61-.08-.43-.41-1.4-.91-1.66a.737.737 0 0 1-.31-1.01c.19-.37.65-.51 1.01-.31 1.28.67 1.65 2.51 1.69 2.71.07.41-.19.8-.6.87-.05 0-.09.01-.14.01"
    />
    <Path
      fill={props.color}
      d="M5.037 20.2a1.8 1.8 0 0 1-.74-1.22l-.31-2.67-.97-.36a1.49 1.49 0 0 1-.92-.99c-.13-.46-.04-.94.25-1.33 1.03-1.38 1.46-2.49 1.28-3.29-.58-2.61.29-4.85 2.66-6.85 1.44-1.21 3.22-1.74 5.62-1.7 1.27.03 2.48.25 3.6.67.39.14.59.58.44.96-.14.39-.58.58-.96.44-.95-.35-2.02-.55-3.11-.58-2.01-.05-3.48.38-4.62 1.35-1.93 1.63-2.62 3.34-2.17 5.38.28 1.26-.23 2.74-1.54 4.51l.93.39c.51.2.88.64.98 1.18l.32 2.7c.01.08.05.15.11.19.07.05.19.06.33.04l2.77-.62c.21-.05.27-.09.42-.81.04-.18.08-.36.13-.55.11-.4.52-.63.92-.52s.63.52.52.92c-.04.16-.08.31-.11.46-.15.71-.36 1.69-1.56 1.96l-2.78.63c-.503.1-1.065.007-1.49-.29M18.228 22.039c-.29 0-.56-.17-.69-.45-1.19-2.72-.88-5.86.92-9.07.2-.36.66-.49 1.02-.29s.49.66.29 1.02c-1.58 2.82-1.87 5.43-.85 7.73a.743.743 0 0 1-.69 1.05zM17.268 9.86a.75.75 0 0 1-.53-.22L15.108 8a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l1.1 1.1 2.84-2.84c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-3.37 3.37a.75.75 0 0 1-.53.22z"
    />
  </Svg>
);
export default IconlystAiBrainCheckOutline;
