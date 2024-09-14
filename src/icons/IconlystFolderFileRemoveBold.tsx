import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderFileRemoveBold = ({
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
      d="M14.298 13.945H9.703a.75.75 0 0 1 0-1.5h4.595a.75.75 0 0 1 0 1.5m2.097-8.581h-2.651a1.66 1.66 0 0 1-1.314-.657l-.856-1.138a2.65 2.65 0 0 0-2.111-1.056H7.588C4.164 2.513 2.5 4.42 2.5 8.34v7.313c0 3.652 2.185 5.833 5.845 5.833h7.296c3.653 0 5.833-2.181 5.833-5.83l.026-4.658c0-3.845-1.622-5.635-5.105-5.635"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFolderFileRemoveBold;
