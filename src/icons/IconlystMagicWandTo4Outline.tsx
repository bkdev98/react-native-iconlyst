import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMagicWandTo4Outline = ({
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
      d="M13.717 3.417a.75.75 0 0 1 .872-.605c2.68.484 5.035 2.136 6.145 4.702 1.283 2.968.535 6.304-1.553 8.721a.75.75 0 1 1-1.135-.98c1.769-2.049 2.333-4.782 1.311-7.145-.885-2.048-2.783-3.415-5.035-3.822a.75.75 0 0 1-.605-.871M10.354 11.142a.942.942 0 0 0-1.544 1.081l5.34 7.625a.942.942 0 1 0 1.543-1.081zm-2.173-1.46a2.44 2.44 0 0 1 3.402.6l5.339 7.625a2.442 2.442 0 0 1-4.002 2.801l-5.339-7.625a2.44 2.44 0 0 1 .6-3.401"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.796 12.014a.75.75 0 0 1-.184 1.045L9.84 15a.75.75 0 0 1-.86-1.228l2.773-1.942a.75.75 0 0 1 1.044.184M5.569 6.836a.75.75 0 0 1 .13 1.052c-1.242 1.594-1.79 3.548-1.479 5.404a.75.75 0 0 1-1.48.247c-.386-2.313.304-4.684 1.776-6.573a.75.75 0 0 1 1.053-.13M10.167 2.25a.75.75 0 0 1 .704.49l.082.223a2.31 2.31 0 0 0 1.366 1.368l.222.082a.75.75 0 0 1 0 1.407l-.222.082a2.31 2.31 0 0 0-1.366 1.368l-.082.223a.75.75 0 0 1-1.407 0L9.38 7.27a2.31 2.31 0 0 0-1.365-1.368l-.223-.082a.75.75 0 0 1 0-1.407l.222-.082a2.31 2.31 0 0 0 1.366-1.368l.083-.223a.75.75 0 0 1 .703-.49m-.545 2.866q.3.245.545.546.245-.3.545-.546a4 4 0 0 1-.545-.545q-.245.3-.545.545"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMagicWandTo4Outline;
