import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBirdOutline = ({
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
      fill={props.color}
      d="M7.176 9.003a.75.75 0 0 1-.13-1.49c.41-.06.8.2.87.61s-.2.8-.6.87h-.01s-.09.01-.13.01"
    />
    <Path
      fill={props.color}
      d="M15.396 16.303c-.33 0-.63-.21-.72-.54a.76.76 0 0 1 .52-.93c2.83-.8 4.67-3.52 5.17-7.56-3.4 2.49-6.89 2.84-10.4 1.05a.4.4 0 0 1-.1-.07c-.22-.17-.44-.35-.67-.54-.7-.59-1.37-1.14-2.27-1.15-.32 0-.83.23-1.13.67-.25.35-.3.73-.15 1.13.09.25.04.52-.12.73-.03.04-.08.1-.13.17 2.84.96 4.15 3.28 4.75 4.34.09.16.16.29.21.36.31.27.32.72.05 1.03s-.77.32-1.08.05c-.17-.15-.28-.34-.48-.7-.61-1.09-1.89-3.36-4.85-3.89a.75.75 0 0 1-.57-.46c-.1-.24-.06-.52.09-.72 0 0 .34-.45.6-.8-.15-.73 0-1.46.45-2.09.55-.78 1.5-1.31 2.36-1.31h.02c1.44.01 2.43.84 3.22 1.5.18.15.36.31.55.44 3.4 1.71 6.68 1.06 10.04-1.99.22-.2.55-.25.82-.13.27.13.45.4.44.7-.25 8.07-4.55 10.15-6.39 10.67q-.105.03-.21.03z"
    />
    <Path
      fill={props.color}
      d="M8.536 19.763c-.91 0-1.89-.13-2.94-.42a.76.76 0 0 1-.54-.6c-.05-.29.08-.58.32-.74 3.07-2.06 4.63-4.16 4.63-6.21 0-.41.34-.75.75-.75s.75.34.75.75c0 2.22-1.3 4.37-3.88 6.43 4.54.49 6.78-2.75 7.29-4.19.14-.39.57-.59.96-.46.39.14.59.57.46.96-.83 2.35-3.49 5.24-7.79 5.24z"
    />
    <Path
      fill={props.color}
      d="M6.226 16.393c-2.01 0-3.6-.45-3.7-.48a.748.748 0 0 1-.08-1.41c3.04-1.27 4.42-3.21 4.43-3.23.24-.34.71-.42 1.04-.19.34.24.43.7.19 1.04-.05.07-1 1.43-3.05 2.71 1.16.11 2.65.1 4.03-.36.39-.13.82.09.95.48s-.09.82-.48.95c-1.12.37-2.28.49-3.33.49"
    />
  </Svg>
);
export default IconlystBirdOutline;