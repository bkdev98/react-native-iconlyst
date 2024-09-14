import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystInternetServerOutline = ({
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
      d="M12.25 3.75a5.483 5.483 0 1 0 0 10.965 5.483 5.483 0 0 0 0-10.965M5.268 9.233a6.983 6.983 0 1 1 13.965 0 6.983 6.983 0 0 1-13.965 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.312 5.087c-.381 1.025-.632 2.49-.632 4.146s.25 3.12.632 4.145c.192.515.402.88.598 1.102s.313.235.34.235.143-.012.34-.235c.196-.222.406-.587.598-1.102.381-1.024.633-2.49.633-4.145 0-1.656-.252-3.121-.633-4.146-.192-.515-.402-.88-.598-1.102-.197-.223-.314-.235-.34-.235s-.144.012-.34.235-.406.587-.598 1.102m-.528-2.093c.358-.407.852-.744 1.466-.744s1.107.337 1.466.744c.36.409.65.957.878 1.57.458 1.231.727 2.882.727 4.669s-.269 3.437-.727 4.669c-.229.612-.518 1.16-.878 1.569-.358.407-.852.744-1.466.744s-1.108-.337-1.466-.744c-.36-.409-.65-.957-.878-1.57-.458-1.23-.726-2.882-.726-4.668s.268-3.438.726-4.67c.228-.612.518-1.16.878-1.569"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.268 9.232a.75.75 0 0 1 .75-.75h12.465a.75.75 0 0 1 0 1.5H6.018a.75.75 0 0 1-.75-.75M12.249 18.557a.847.847 0 1 0 0 1.694.847.847 0 0 0 0-1.694m-2.347.846a2.347 2.347 0 1 1 4.694 0 2.347 2.347 0 0 1-4.694 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.3 19.403a.75.75 0 0 1 .75-.75h4.62a.75.75 0 0 1 0 1.5H6.05a.75.75 0 0 1-.75-.75m7.774 0a.75.75 0 0 1 .75-.75h4.628a.75.75 0 1 1 0 1.5h-4.628a.75.75 0 0 1-.75-.75M12.25 14.715a.75.75 0 0 1 .75.75v2.337a.75.75 0 0 1-1.5 0v-2.337a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystInternetServerOutline;
