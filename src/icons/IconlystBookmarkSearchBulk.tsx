import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBookmarkSearchBulk = ({
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
      d="M4.671 21.094a1.38 1.38 0 0 0 1.657.229l5.697-3.193 5.643 3.186c.322.182.695.229 1.052.128.356-.099.652-.331.833-.652a1.4 1.4 0 0 0 .18-.68l-.006-13.526c0-2.635-1.695-4.086-4.77-4.086H9.04c-3.033 0-4.772 1.427-4.772 3.915v13.701a1.37 1.37 0 0 0 .403.978"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.565 7.854c-.961 0-1.742.781-1.742 1.741s.78 1.742 1.742 1.742c.96 0 1.74-.782 1.74-1.742s-.78-1.741-1.74-1.741m2.95 5.568a.75.75 0 0 1-.53-.219l-.801-.8a3.2 3.2 0 0 1-1.62.434 3.246 3.246 0 0 1-3.241-3.242 3.245 3.245 0 0 1 3.242-3.241 3.245 3.245 0 0 1 3.24 3.241c0 .655-.194 1.266-.53 1.777l.77.769a.75.75 0 0 1-.53 1.281"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBookmarkSearchBulk;
