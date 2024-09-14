import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPublicShareBulk = ({
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
      d="M19.704 6.468a1.8 1.8 0 0 0-1.796 1.8c0 .332.097.639.256.905l-1.41 1.525a.75.75 0 0 0 1.102 1.018l1.56-1.687c.094.014.19.028.288.028.99 0 1.796-.802 1.796-1.79a1.8 1.8 0 0 0-1.796-1.8M13.482 6.258v3.49a.75.75 0 0 0 1.5 0v-3.49a1.8 1.8 0 0 0 1.046-1.63 1.8 1.8 0 0 0-1.796-1.8 1.8 1.8 0 0 0-1.796 1.8 1.8 1.8 0 0 0 1.046 1.63M8.138 7.668c.1 0 .194-.014.29-.03l1.023 1.13v1.549a.75.75 0 0 0 1.5 0v-1.84a.74.74 0 0 0-.195-.503L9.677 6.786c.16-.267.257-.575.257-.908a1.8 1.8 0 0 0-1.796-1.8 1.795 1.795 0 1 0 0 3.59M6.092 9.538c0-.987-.806-1.79-1.796-1.79S2.5 8.55 2.5 9.538a1.8 1.8 0 0 0 1.796 1.8 1.8 1.8 0 0 0 1.796-1.8"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.852 13.73c-.247.186-.496.39-.749.597-.355.291-.715.585-1.083.837.006-.069.021-.135.021-.206 0-1.127-.753-2.07-1.869-2.347-1.008-.257-2.209-.507-3.55-.493-2.04.055-4.365 1.151-5.86 2.157A.75.75 0 1 0 4.6 15.52c1.26-.848 3.343-1.854 5.055-1.9 1.153-.037 2.236.213 3.152.446.453.112.735.455.735.893 0 .515-.409.89-.973.89h-.03a12 12 0 0 0-.894 0h-.412a.74.74 0 0 0-.713.565q-.009.037-.015.075c-.006.037-.022.07-.022.11 0 .022.011.041.013.063.001.026-.008.05-.004.076.006.044.03.08.044.121q.007.024.017.047c.128.31.443.51.79.465.108-.016.223-.017.335-.023h.874c.25.008.5.018.746.011 1.525-.04 2.711-1.013 3.758-1.87.236-.196.47-.387.698-.56a.804.804 0 0 1 1.04.067c.311.315.311.83.002 1.142l-.233.234c-1.187 1.188-2.21 2.215-3.72 2.797-2.228.865-4.314.451-6.777-.036-.958-.19-2.579-.215-3.885-.215a.75.75 0 0 0 0 1.5c.727 0 2.657 0 3.643.196 1.434.284 2.823.56 4.237.56a9 9 0 0 0 3.323-.605c1.805-.696 2.988-1.883 4.241-3.139l.234-.234a2.32 2.32 0 0 0-.005-3.26 2.314 2.314 0 0 0-3-.206"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPublicShareBulk;
