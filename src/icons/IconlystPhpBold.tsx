import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhpBold = ({
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
      d="M20.128 12.41c-.127.602-.588 1.121-1.122 1.264-.224.057-.926.042-1.488.018l.435-2.633h.803c.534 0 .811.063 1.02.23.416.335.421.794.352 1.12m.898-2.682c-.738-.59-1.562-.669-2.27-.669h-1.65a1 1 0 0 0-.988.837l-.75 4.551-.01.057-.373 2.252a1 1 0 0 0 1.974.326l.231-1.402c.991.048 1.834.061 2.334-.075 1.27-.339 2.275-1.43 2.561-2.782.253-1.2-.14-2.356-1.059-3.095M14.8 10.241a2.26 2.26 0 0 0-1.73-.802h-1.238l.194-1.177a1 1 0 0 0-.823-1.15.994.994 0 0 0-1.15.824L8.92 14.797a.999.999 0 1 0 1.973.326l.608-3.684h1.568a.27.27 0 0 1 .205.095.26.26 0 0 1 .059.212l-.505 3.051a1 1 0 0 0 1.974.326l.503-3.05a2.26 2.26 0 0 0-.505-1.832M6.995 12.417c-.13.602-.587 1.117-1.122 1.257-.223.056-.926.042-1.487.018l.435-2.632h.805c.533 0 .809.063 1.018.228.418.337.422.8.35 1.129m.899-2.69c-.74-.588-1.561-.667-2.268-.667H3.972a1 1 0 0 0-.987.836l-1.132 6.86a1.001 1.001 0 0 0 1.974.326l.23-1.401c.99.047 1.836.059 2.33-.074 1.268-.332 2.274-1.42 2.564-2.77.258-1.206-.135-2.367-1.057-3.11"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPhpBold;
