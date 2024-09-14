import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOldTvAntennaErrorBold = ({
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
      d="M12.75 14.439a.749.749 0 1 1-1.5 0v-3.21c0-.41.34-.75.75-.75s.75.34.75.75zm0 2.62c0 .41-.34.75-.75.75a.755.755 0 0 1 0-1.51c.41 0 .75.33.75.75zm4.22-10.15h-3.34L17 3.889c.3-.27.33-.75.05-1.05a.735.735 0 0 0-1.05-.06l-4.05 3.62-3.94-3.62a.747.747 0 0 0-1.06.05c-.28.3-.26.78.05 1.06l3.29 3.02H7.03c-2.5 0-4.53 2.03-4.53 4.53v5.46a4.53 4.53 0 0 0 4.53 4.52h9.94c2.5 0 4.53-2.03 4.53-4.52v-5.46c0-2.5-2.03-4.53-4.53-4.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystOldTvAntennaErrorBold;
