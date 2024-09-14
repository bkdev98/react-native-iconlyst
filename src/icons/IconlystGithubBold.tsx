import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGithubBold = ({
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
      d="M12 3.209c-5.238 0-9.5 4.262-9.5 9.5 0 4.126 2.74 7.854 6.664 9.067a.502.502 0 0 0 .645-.527c-.14-1.393.661-2.869 1.003-3.223a.5.5 0 0 0-.296-.843c-1.791-.228-3.449-.836-3.449-3.726a2.8 2.8 0 0 1 .769-1.935.5.5 0 0 0 .105-.52 2.56 2.56 0 0 1-.064-1.592c.291.048.854.219 1.731.805.12.081.269.102.407.067a7.66 7.66 0 0 1 3.964 0 .5.5 0 0 0 .407-.067c.884-.591 1.449-.76 1.729-.809.149.524.13 1.09-.061 1.597a.5.5 0 0 0 .106.52c.494.52.767 1.204.767 1.925 0 2.939-1.654 3.526-3.441 3.723a.5.5 0 0 0-.304.845c.33.341 1.139 1.856 1.003 3.244a.5.5 0 0 0 .182.436.49.49 0 0 0 .465.089 9.48 9.48 0 0 0 6.668-9.076c0-5.238-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGithubBold;
