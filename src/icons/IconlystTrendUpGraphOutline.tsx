import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTrendUpGraphOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.2 17.521a.75.75 0 0 1 .75.75v2.848a.75.75 0 0 1-1.5 0V18.27a.75.75 0 0 1 .75-.75M10.332 16.165a.75.75 0 0 1 .75.75v4.204a.75.75 0 0 1-1.5 0v-4.204a.75.75 0 0 1 .75-.75M15.464 13.453a.75.75 0 0 1 .75.75v6.916a.75.75 0 0 1-1.5 0v-6.916a.75.75 0 0 1 .75-.75M20.596 9.521a.75.75 0 0 1 .75.75v10.848a.75.75 0 0 1-1.5 0V10.271a.75.75 0 0 1 .75-.75M21.034 2.51a.75.75 0 0 1 .303.494l.43 2.798a.75.75 0 1 1-1.482.228l-.315-2.043-2.366.405a.75.75 0 1 1-.253-1.479l3.118-.534a.75.75 0 0 1 .565.131"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.983 2.476a.75.75 0 0 1 .255 1.03c-3.289 5.456-7.592 8.123-11.083 9.419-1.742.646-3.279.95-4.385 1.092-.554.072-1 .103-1.312.116a10 10 0 0 1-.465.009h-.041l.02-.743-.02.742a.75.75 0 0 1 .043-1.5l.017.001h.074q.103 0 .308-.007c.273-.012.677-.04 1.184-.105a18.6 18.6 0 0 0 4.055-1.012c3.226-1.197 7.234-3.666 10.32-8.786a.75.75 0 0 1 1.03-.256"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTrendUpGraphOutline;
