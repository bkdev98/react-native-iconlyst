import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSkypeBulk = ({
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
      d="M20.86 13.384a9 9 0 0 0-.38-4.291 8.96 8.96 0 0 0-4.22-4.978c-1.69-.928-3.686-1.271-5.637-.974-1.814-.97-4.113-.826-5.77.37a5.5 5.5 0 0 0-2.23 3.356 5.6 5.6 0 0 0 .515 3.756 9.04 9.04 0 0 0 .464 4.525 9.05 9.05 0 0 0 4.353 4.86 9.04 9.04 0 0 0 5.422.857 5.5 5.5 0 0 0 2.585.633c1.075 0 2.147-.303 3.038-.905a5.48 5.48 0 0 0 2.39-3.53 5.6 5.6 0 0 0-.53-3.68"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M15.417 14.046v-.062c-.017-1.228-.81-2.262-1.892-2.466l-2.562-.501c-.384-.072-.674-.517-.674-1.033 0-1.11 1.27-1.23 1.814-1.23.845 0 1.61.43 1.776 1a.75.75 0 0 0 1.44-.421c-.359-1.224-1.68-2.08-3.216-2.08-2.289 0-3.314 1.372-3.314 2.73 0 1.247.797 2.302 1.891 2.508l2.562.5c.383.072.671.51.675 1.023-.006.764-.683 1.22-1.814 1.22-.846 0-1.61-.431-1.777-1.001a.75.75 0 1 0-1.44.422c.36 1.224 1.682 2.079 3.217 2.079 2.266 0 3.293-1.343 3.314-2.688"
    />
  </Svg>
);
export default IconlystSkypeBulk;
