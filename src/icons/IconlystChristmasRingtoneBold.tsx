import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasRingtoneBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.858 20.132h-3.66a.75.75 0 0 0-.585 1.22 3.09 3.09 0 0 0 2.412 1.173 3.09 3.09 0 0 0 2.418-1.174.748.748 0 0 0-.585-1.219M6.784 5.206c0-.846.174-1.422.479-1.58.182-.096.929-.264 2.939 1.08v1c-2.01 1.343-2.76 1.177-2.94 1.08-.304-.157-.478-.733-.478-1.58m9.8-1.596c.285.143.456.74.456 1.596s-.171 1.454-.456 1.598c-.337.163-1.215-.05-2.671-1.081V4.69c1.457-1.034 2.335-1.25 2.67-1.08m1.605 9.93c-.344-.596-.67-1.16-.67-2.493 0-.946-.333-1.898-.896-2.725.224-.03.438-.08.633-.178.852-.426 1.284-1.416 1.284-2.938 0-1.521-.432-2.51-1.284-2.938-.956-.475-2.265-.132-3.982 1.039a1.84 1.84 0 0 0-1.217-.465c-.474 0-.903.184-1.231.477-1.86-1.201-3.257-1.542-4.254-1.024-.855.443-1.288 1.423-1.288 2.91 0 1.49.433 2.47 1.288 2.913.24.125.51.186.798.212-.56.824-.892 1.775-.892 2.718 0 1.333-.325 1.897-.67 2.495-.342.596-.697 1.21-.695 2.464.229 2.762 2.698 3.302 6.886 3.302 4.187 0 6.657-.54 6.889-3.343 0-1.213-.355-1.83-.7-2.425"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChristmasRingtoneBold;
