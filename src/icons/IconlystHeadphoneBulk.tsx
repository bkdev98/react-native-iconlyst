import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeadphoneBulk = ({
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
      d="M18.112 20.957c-.641 0-1.24-.283-1.655-.785a2.19 2.19 0 0 1-.445-1.914l.942-3.937a2.18 2.18 0 0 1 1.27-1.504 2.14 2.14 0 0 1 1.942.113c1.695.98 2.503 2.928 2.01 4.846a4.25 4.25 0 0 1-3.287 3.097q-.348.068-.683.082h-.002zM6.938 20.954h-.005a4.5 4.5 0 0 1-.68-.082 4.26 4.26 0 0 1-3.29-3.097c-.492-1.917.316-3.864 2.01-4.845a2.15 2.15 0 0 1 1.944-.114 2.17 2.17 0 0 1 1.269 1.505l.943 3.935c.16.678 0 1.375-.445 1.913a2.13 2.13 0 0 1-1.655.787z"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.054 8.947h.02c.47 0 .91-.183 1.244-.516.675-.676.7-1.783.052-2.469l-.174-.179C15.542 2.13 9.598 2.13 5.943 5.784l-.176.181c-.645.683-.62 1.79.054 2.464.338.337.773.506 1.262.515a1.8 1.8 0 0 0 1.285-.56l.074-.075.01-.01a5.79 5.79 0 0 1 4.117-1.71h.006a5.77 5.77 0 0 1 4.106 1.71l.084.086c.343.357.8.557 1.29.562m.65-.116a1.77 1.77 0 0 0 1.066-1.169 8.3 8.3 0 0 1 1.174 4.268v1.57a4.4 4.4 0 0 0-.778-.57 2.2 2.2 0 0 0-.722-.263v-.737a6.8 6.8 0 0 0-.74-3.099M5.821 8.43c-.22-.22-.37-.486-.451-.767a8.33 8.33 0 0 0-1.172 4.267v1.57q.348-.323.776-.57c.228-.133.473-.22.724-.263v-.737c0-1.086.255-2.148.741-3.103a1.7 1.7 0 0 1-.618-.397"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystHeadphoneBulk;
