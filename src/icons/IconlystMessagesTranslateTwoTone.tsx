import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesTranslateTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.708 20.588a8.98 8.98 0 0 0 10.156-1.81c3.512-3.524 3.517-9.24 0-12.771a8.986 8.986 0 0 0-12.727 0c-2.75 2.76-3.346 6.848-1.803 10.19.197.495.35.893.35 1.278 0 1.078-1.035 2.413-.344 3.106.69.693 2.02-.347 3.089-.353.383 0 .787.16 1.28.36"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.184 9.742h6.633m-3.316-1.144v1.144m-1.392 2.58c.612 1.113 1.895 2.792 4.238 3.317m-.806-5.897c.06.123-.24 4.973-5.055 6.45"
    />
  </Svg>
);
export default IconlystMessagesTranslateTwoTone;
