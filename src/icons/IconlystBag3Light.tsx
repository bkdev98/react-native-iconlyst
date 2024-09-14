import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBag3Light = ({
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
      d="M19.277 9.22v7.912c0 2.384-1.682 3.868-4.064 3.868H8.788c-2.382 0-4.064-1.484-4.064-3.869V9.22c0-2.384 1.682-3.866 4.064-3.866h6.425c2.382 0 4.064 1.49 4.064 3.866M14.774 5.34v-.596c0-.964-.78-1.744-1.743-1.744h-2.057c-.962 0-1.744.78-1.744 1.744v.596M8.465 20.957V5.458M15.541 20.957V5.458"
    />
  </Svg>
);
export default IconlystBag3Light;
