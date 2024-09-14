import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpeakerMegaphone3Bold = ({
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
      d="M13.037 18.428c.12.34.1.71-.05 1.04a1.3 1.3 0 0 1-.77.7 1.34 1.34 0 0 1-1.74-.81l-1.16-3.17c.73-.1 1.71-.24 2.76-.39zm5.36-10.5c.49 1.34.73 2.74.65 3.83-.06.85-.32 1.46-.67 1.59-.34.13-.93-.18-1.53-.79-.76-.78-1.48-2-1.97-3.35-.98-2.7-.75-4.83-.13-5.34a.2.2 0 0 1 .06-.04c.03-.02.06-.04.09-.05.05-.02.11-.03.17-.03.36 0 .86.3 1.37.82.76.79 1.47 2.01 1.96 3.36m1.41-.52c-.57-1.56-1.38-2.94-2.3-3.88-1.06-1.09-2.17-1.5-3.12-1.16-.13.05-.26.11-.38.19-.01.01-.03.02-.05.03-.74.46-7.89 4.86-8.83 5.49-1.27.86-2.18 3.09-1.41 5.19.7 1.94 2.57 3.05 4.06 3.08l1.29 3.52c.26.72.79 1.29 1.48 1.62.38.17.79.26 1.21.26.33 0 .66-.05.98-.17.71-.26 1.29-.79 1.61-1.48s.36-1.47.1-2.19l-.85-2.34c2.42-.34 4.74-.68 4.93-.71.01 0 .02 0 .03-.01.05-.01.1-.02.15-.04.07-.01.13-.03.19-.05.95-.35 1.54-1.37 1.65-2.89.01-.17.02-.34.02-.52 0-1.2-.26-2.57-.76-3.94"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSpeakerMegaphone3Bold;
