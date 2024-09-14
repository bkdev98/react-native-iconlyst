import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiningTableBulk = ({
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
      d="M5.586 9.197a1 1 0 0 1 1-1H17.45a1 1 0 1 1 0 2h-4.43v8.02a1 1 0 1 1-2 0v-8.02H6.585a1 1 0 0 1-1-1"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.882 4.79a1 1 0 0 1 1.111.875l.812 6.836H7.18c1.133 0 2.052.919 2.052 2.052v3.663a1 1 0 0 1-2 0v-3.663a.05.05 0 0 0-.052-.052H4.753l-.772 3.91a1 1 0 0 1-1.962-.388l.892-4.515L2.007 5.9a1 1 0 0 1 .875-1.11m18.236 0a1 1 0 0 1 .875 1.111l-.904 7.607.892 4.515a1 1 0 0 1-1.962.387l-.772-3.909H16.82a.05.05 0 0 0-.052.052v3.663a1 1 0 0 1-2 0v-3.663c0-1.133.919-2.052 2.052-2.052h2.374l.812-6.836a1 1 0 0 1 1.11-.875"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDiningTableBulk;
