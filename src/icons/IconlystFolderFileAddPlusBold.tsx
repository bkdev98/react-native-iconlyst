import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderFileAddPlusBold = ({
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
      d="M14.297 13.946h-1.546v1.547a.75.75 0 0 1-1.5 0v-1.547H9.702a.75.75 0 0 1 0-1.5h1.549v-1.548a.75.75 0 0 1 1.5 0v1.548h1.546a.75.75 0 0 1 0 1.5m2.098-8.582h-2.652a1.66 1.66 0 0 1-1.314-.657l-.856-1.138a2.65 2.65 0 0 0-2.11-1.056H7.588C4.164 2.513 2.5 4.42 2.5 8.342v7.312c0 3.652 2.185 5.833 5.845 5.833h7.296c3.652 0 5.832-2.181 5.833-5.832l.026-4.656c0-3.845-1.622-5.635-5.105-5.635"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFolderFileAddPlusBold;
