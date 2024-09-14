import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudConnectBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.741 15.406v1.522a2.23 2.23 0 0 0-1.343 1.342H6.735a.75.75 0 0 0 0 1.5h3.663a2.23 2.23 0 0 0 2.091 1.482 2.23 2.23 0 0 0 2.093-1.482h3.663a.75.75 0 0 0 0-1.5h-3.663a2.23 2.23 0 0 0-1.34-1.34v-1.524zm.025 3.647a.727.727 0 0 0 .723.7c.385 0 .692-.3.721-.678 0-.019-.01-.035-.01-.055s.008-.035.01-.054a.727.727 0 0 0-.72-.676.727.727 0 0 0-.724.698c0 .011.006.02.006.032s-.006.022-.006.033"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M18.89 15.045a4.9 4.9 0 0 1-1.785.36H7.867c-.328 0-.992-.046-1.757-.357a4.42 4.42 0 0 1-2.61-4.022c0-2.412 1.58-4.155 3.897-4.381C7.622 4.618 9.257 2 12.49 2s4.867 2.618 5.092 4.645c2.317.226 3.896 1.969 3.896 4.381a4.42 4.42 0 0 1-2.588 4.019"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystCloudConnectBulk;
