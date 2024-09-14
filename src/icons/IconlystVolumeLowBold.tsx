import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVolumeLowBold = ({
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
      d="M12.578 20.053c-.571 0-1.14-.164-1.661-.49L7.89 17.671c-.253-.158-.638-.26-.98-.26a24 24 0 0 0-.94-.048h-.007c-.896-.034-1.49-.056-2.278-.706-1.03-.862-1.024-2.804-1.02-4.366v-.585c-.005-1.56-.01-3.502 1.018-4.36.788-.657 1.385-.678 2.291-.71l.078-.003c.237-.009.504-.02.816-.042.36-.036.759-.099 1.023-.263l3.025-1.892c.96-.6 2.087-.65 3.087-.135 1.062.547 1.767 1.648 1.842 2.872a66.4 66.4 0 0 1-.001 9.66 3.43 3.43 0 0 1-1.822 2.858 3.1 3.1 0 0 1-1.445.362M19.227 16.352a.75.75 0 0 0 1.024-.276 8.21 8.21 0 0 0 0-8.153.75.75 0 0 0-1.3.747 6.7 6.7 0 0 1 0 6.658.75.75 0 0 0 .276 1.024"
    />
  </Svg>
);
export default IconlystVolumeLowBold;
