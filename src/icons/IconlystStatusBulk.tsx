import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStatusBulk = ({
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
      d="M12.5 2.5C7.261 2.5 3 6.761 3 12s4.261 9.5 9.5 9.5S22 17.238 22 12s-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.454 12.803c.716-.191 1.314-.517 1.736-.99.492-.55.73-1.25.686-2.026-.098-1.711-1.796-3.002-3.79-2.907-2.46.136-4.489 2.14-4.936 4.747-1.364.433-2.096 1.42-2.016 2.777.091 1.534 1.6 2.72 3.413 2.72q.105 0 .21-.005c2.368-.127 4.256-1.912 4.697-4.316m-1.286-4.424c-1.595.087-2.952 1.304-3.438 2.963l.013-.001a11.4 11.4 0 0 1 1.91.086 8.6 8.6 0 0 0 1.612.063c.815-.045 1.458-.285 1.808-.675.226-.254.326-.562.305-.943-.055-.963-1.193-1.562-2.21-1.493m-1.68 4.539a10 10 0 0 0 1.344.083h.042c-.455 1.48-1.688 2.54-3.194 2.62-.955.043-1.999-.466-2.049-1.306-.017-.293-.063-1.08 1.316-1.35l.005-.002.005-.002h.009a6 6 0 0 1 .85-.122 9 9 0 0 1 1.621.073l.005.001z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStatusBulk;
