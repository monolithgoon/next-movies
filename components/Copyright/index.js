/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import withTheme from 'utils/hocs/withTheme';

const Copyright = ({
  theme,
  text,
  ...rest
}) => (
  <>
    <a {...rest}>
      {text}
    </a>
    <style jsx>{`
      a {
        font-size: 1.25rem;
        font-weight: ${theme.typography.fontWeightMedium};
        color: var(--palette-secondary-main);
      }
    `}</style>
  </>
);

export default withTheme(Copyright);