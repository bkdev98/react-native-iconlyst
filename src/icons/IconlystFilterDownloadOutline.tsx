import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilterDownloadOutline = ({
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
      d="M12.749 2.25a.75.75 0 0 1 .75.75v4.11l1.02-1.024a.75.75 0 0 1 1.063 1.059l-2.3 2.31a.75.75 0 0 1-1.085-.023L9.92 7.144a.75.75 0 1 1 1.063-1.058l1.016 1.021V3a.75.75 0 0 1 .75-.75M6.764 4.916a1.886 1.886 0 0 0-1.887 1.886v2.014c0 .777.306 1.521.85 2.073l4.271 3.803.032.03c.425.425.662 1 .662 1.598v3.167c0 .538.543.907 1.044.708l1.847-.736a.76.76 0 0 0 .48-.707v-1.954c0-.635.267-1.239.734-1.667l4.826-4.772.025-.024c.62-.56.975-1.357.975-2.194v-1.34a1.886 1.886 0 0 0-1.886-1.885.75.75 0 0 1 0-1.5 3.386 3.386 0 0 1 3.386 3.386v1.34c0 1.254-.53 2.452-1.457 3.295l-4.825 4.772-.025.023a.76.76 0 0 0-.253.566v1.954c0 .926-.564 1.757-1.423 2.1h-.001l-1.849.736a2.26 2.26 0 0 1-3.098-2.1V16.32a.76.76 0 0 0-.21-.525l-4.269-3.8-.031-.03a4.45 4.45 0 0 1-1.305-3.15V6.803a3.386 3.386 0 0 1 3.387-3.386.75.75 0 0 1 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFilterDownloadOutline;
